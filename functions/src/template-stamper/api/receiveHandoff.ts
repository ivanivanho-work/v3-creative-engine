import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const db = admin.firestore();

interface AssetSlot {
  slot_id: string;
  url: string;
  type: 'image' | 'video';
  fill_status: 'filled' | 'empty';
}

interface TextSlot {
  slot_id: string;
  final_text: string;
  language: string;
}

interface HandoffPayload {
  handoff_version: string;
  run_id: string;
  pipeline_path: string;
  template_id: string;
  template_version: string;
  asset_slots: AssetSlot[];
  text_slots: TextSlot[];
}

/**
 * Receive a template handoff from the Creative Generator.
 *
 * Validates the payload, stores it in Firestore, and creates a render job
 * that the existing triggerRemotionRender pipeline will pick up.
 */
export const receiveHandoff = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const payload = req.body as HandoffPayload;

  if (!payload.template_id || !payload.run_id || !payload.asset_slots) {
    res.status(400).json({ error: 'Missing required fields: template_id, run_id, asset_slots' });
    return;
  }

  try {
    const assetMappings: Record<string, string> = {};
    for (const slot of payload.asset_slots) {
      if (slot.fill_status === 'filled' && slot.url) {
        assetMappings[slot.slot_id] = slot.url;
      }
    }

    const textMappings: Record<string, string> = {};
    for (const slot of (payload.text_slots || [])) {
      if (slot.final_text) {
        textMappings[slot.slot_id] = slot.final_text;
      }
    }

    const handoffRef = await db.collection('handoffs').add({
      handoffVersion: payload.handoff_version,
      runId: payload.run_id,
      pipelinePath: payload.pipeline_path,
      templateId: payload.template_id,
      templateVersion: payload.template_version,
      assetMappings,
      textMappings,
      assetSlotCount: payload.asset_slots.length,
      textSlotCount: (payload.text_slots || []).length,
      status: 'received',
      receivedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    const jobRef = await db.collection('jobs').add({
      templateId: payload.template_id,
      assetMappings,
      textMappings,
      handoffId: handoffRef.id,
      runId: payload.run_id,
      status: 'queued',
      progress: 0,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    functions.logger.info('Handoff received and job created', {
      handoffId: handoffRef.id,
      jobId: jobRef.id,
      templateId: payload.template_id,
      runId: payload.run_id,
    });

    res.status(200).json({
      ok: true,
      handoffId: handoffRef.id,
      jobId: jobRef.id,
      status: 'queued',
    });
  } catch (error) {
    functions.logger.error('Error processing handoff', error);
    res.status(500).json({ error: 'Failed to process handoff' });
  }
});
