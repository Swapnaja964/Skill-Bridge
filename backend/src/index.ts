
import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import resumesRouter from './routes/resumes';
import jobsRouter from './routes/jobs';
import skillGapRoutes from './routes/skillGapRoutes';
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import resumeRoutes from "./routes/resume";
import jobRoutes from "./routes/jobs";
import userRoutes from "./routes/users";

dotenv.config();
const app = express();
app.use(bodyParser.json());


app.use('/api/resumes', resumesRouter);
app.use('/api/jobs', jobsRouter);
app.use('/api', skillGapRoutes);

app.use("/api/resumes", resumeRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/users", userRoutes);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
