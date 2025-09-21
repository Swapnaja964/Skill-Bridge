import { Router } from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

const router = Router();
const upload = multer();

// In-memory store for demo purposes
const store: any = { resumes: {}, analyses: {} };

router.post('/upload', upload.single('file'), (req, res) => {
  // For scaffold: accept JSON or file and store text.
  const text = req.body.text || (req.file ? req.file.buffer.toString('utf8') : null);
  if (!text) return res.status(400).json({ error: 'No resume text provided' });
  const id = 'r_' + Date.now();
  store.resumes[id] = { id, text, created: new Date() };
  // Placeholder: in production, enqueue spark job. Here we simulate basic analysis.
  const skills = extractSkillsMock(text);
  store.analyses[id] = { id, skills, created: new Date() };
  res.json({ resume_id: id, status: 'done', skills });
});

router.get('/:id/analysis', (req, res) => {
  const id = req.params.id;
  if (!store.analyses[id]) return res.status(404).json({ error: 'Not found' });
  res.json(store.analyses[id]);
});

function extractSkillsMock(text: string) {
  // Simple mock: look for common skill tokens
  const candidates = ['python','java','sql','spark','pyspark','docker','kubernetes','aws','react','node','tensorflow','pytorch','nlp','linux'];
  const found = [];
  const lt = text.toLowerCase();
  for (const c of candidates) if (lt.includes(c)) found.push(c);
  return found;
}

export default router;
