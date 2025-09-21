# Architecture Overview - SkillBridge

Components:
- Frontend (React/Vanilla): Candidate & Recruiter dashboards, visualizations using Chart.js / D3.
- Backend (Node.js / NestJS): REST APIs for resumes, job postings, triggering Spark analysis.
- Database (PostgreSQL): Stores users, resumes, job posts, analysis results.
- Processing (Apache Spark): Large-scale resume/job text processing, NLP, ML recommendations.
- Recommendation Engine: Spark MLlib models (or a simpler rule-based recommender to start).

Dataflow (simplified):
1. Candidate uploads resume → backend stores file & text; enqueues a Spark job.
2. Spark job extracts skills, compares with job descriptions, computes gap scores, stores results.
3. Frontend polls backend for results and displays visual dashboards.

Notes:
- Start with a prototype using Express + simple PySpark scripts, then migrate to NestJS and a Spark cluster.
