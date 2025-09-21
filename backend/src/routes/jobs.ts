import { Router } from 'express';
const router = Router();
const store: any = { jobs: {} };

router.post('/', (req, res) => {
  const body = req.body;
  if (!body || !body.title || !body.description) return res.status(400).json({ error: 'Invalid job body' });
  const id = 'j_' + Date.now();
  store.jobs[id] = { id, ...body, created: new Date() };
  res.json({ job_id: id });
});

router.get('/:id/match', (req, res) => {
  const jobId = req.params.id;
  const resumeId = req.query.resume_id as string;
  const job = store.jobs[jobId];
  if (!job) return res.status(404).json({ error: 'Job not found' });
  // For demo: fetch resume analysis from in-memory store in resumes route
  // In full app, query DB or analysis store
  res.json({ message: 'In full app, returns match percentage and missing skills.' });
});

export default router;
