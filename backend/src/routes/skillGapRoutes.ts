import express from 'express';
import { getSkillGap } from '../controllers/skillGapController';

const router = express.Router();

router.get('/skill-gap', getSkillGap);

export default router;
