import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import resumesRouter from './routes/resumes';
import jobsRouter from './routes/jobs';
import skillGapRoutes from './routes/skillGapRoutes';

const app = express();
const upload = multer();
app.use(bodyParser.json());

app.use('/api/resumes', resumesRouter);
app.use('/api/jobs', jobsRouter);
app.use('/api', skillGapRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SkillBridge backend listening on ${PORT}`);
});
