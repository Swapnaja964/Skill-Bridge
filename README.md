# SkillBridge - Job Skill Gap Analyzer (Scaffold)

**What this is:** A starter project scaffold for SkillBridge: resume <-> job skill gap analysis.

**Contents:**
- backend/: Node.js (TypeScript) Express-based minimal API (can be migrated to NestJS easily)
- spark/: PySpark job placeholder for skill extraction & gap detection
- frontend/: Simple HTML/JS UI demonstrating resume upload and visualization (Chart.js)
- data/: sample resume and job JSON files
- docs/: architecture and API specification

**How to run (quick local dev - requires Node.js & Python):**
1. Backend:
   - `cd backend`
   - `npm install`
   - `npm run build` (if using tsc) or `npm run dev` for ts-node (see package.json scripts)
2. Spark job (local testing):
   - `python3 -m venv venv && source venv/bin/activate`
   - `pip install pyspark` (and spaCy if you plan to enhance)
   - `python spark/skill_gap_job.py data/sample_resume.json data/sample_job.json`
3. Frontend:
   - Open `frontend/index.html` in a browser (or serve with `npx http-server frontend`)

This scaffold is intentionally lightweight. Replace placeholder logic with production-grade NLP (Spark NLP, spaCy, MLlib).
