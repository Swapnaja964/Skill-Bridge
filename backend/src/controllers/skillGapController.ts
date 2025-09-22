import { Request, Response } from 'express';
import { spawn } from 'child_process';
import path from 'path';

export const getSkillGap = (req: Request, res: Response) => {
  const resumePath = path.join(__dirname, '../../data/sample_resume.json');
  const jobPath = path.join(__dirname, '../../data/sample_job.json');
  const scriptPath = path.join(__dirname, '../../spark/skill_gap_job.py');

  // Pass arguments separately, spawn handles spaces properly
  const pythonProcess = spawn('python', [scriptPath, resumePath, jobPath]);

  let output = '';

  pythonProcess.stdout.on('data', (data) => {
    output += data.toString();
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error('Python error:', data.toString());
  });

  pythonProcess.on('close', (code) => {
    if (code !== 0) {
      return res.status(500).json({ error: 'Spark job failed' });
    }

    try {
      const result = JSON.parse(output);
      res.json(result);
    } catch (err) {
      console.error('JSON parse error:', err);
      res.status(500).json({ error: 'Failed to parse Spark output' });
    }
  });
};
