# API Spec (Minimal)

## POST /api/resumes/upload
- Upload multipart/form-data: file (resume .pdf/.docx/.txt) or JSON body of resume text.
- Response: { resume_id, status: 'processing' }

## GET /api/resumes/{id}/analysis
- Returns skill extraction & gap analysis for the resume.

## POST /api/jobs
- Create job posting (JSON): { title, company, description, required_skills: [] }

## GET /api/jobs/{id}/match?resume_id=...
- Returns match percentage and missing skills prioritized.
