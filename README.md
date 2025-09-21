# 🚀 SkillBridge - Job Skill Gap Analyzer  

> 🔍 Compare **candidate resumes** with **job postings** to identify missing skills, strengths, and personalized learning paths.  

---

## 📂 Project Scaffold

**What this is:** A lightweight starter scaffold for SkillBridge.  
Use it to kickstart a full-stack project combining **Node.js + PostgreSQL + Apache Spark + HTML5 frontend**.  

### ✅ Contents
- **backend/** → Node.js (TypeScript) + Express minimal API (easy migration to NestJS)  
- **spark/** → PySpark job placeholder for skill extraction & gap detection  
- **frontend/** → Simple HTML/JS UI with **Chart.js** visualizations  
- **data/** → Sample JSON files (resume + job posting)  
- **docs/** → Architecture diagrams + API specification  

---

# 🛠️ Technologies Used  
<p align="center">
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  </a>
  <a href="https://expressjs.com/">
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  </a>
  <a href="https://knexjs.org/">
    <img src="https://img.shields.io/badge/Knex.js-F68B1E?style=for-the-badge&logo=knex&logoColor=white" />
  </a>
  <a href="https://www.postgresql.org/">
    <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
  </a>
  <a href="https://spark.apache.org/">
    <img src="https://img.shields.io/badge/Apache Spark-E25A1C?style=for-the-badge&logo=apache-spark&logoColor=white" />
  </a>
  <a href="https://www.python.org/">
    <img src="https://img.shields.io/badge/PySpark-FFD43B?style=for-the-badge&logo=python&logoColor=black" />
  </a>
  <a href="https://getbootstrap.com/">
    <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  </a>
  <a href="https://www.chartjs.org/">
    <img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white" />
  </a>
</p>

---

# 🗄️ Database Tables  

## Users Table
| Column Name | Type                          | Description          |
| ----------- | ----------------------------- | -------------------- |
| id          | INT PK                        | Primary key          |
| name        | VARCHAR                       | User full name       |
| email       | VARCHAR UNIQUE                | User email           |
| password    | VARCHAR                       | Hashed password      |
| role        | ENUM('candidate','recruiter') | User role            |
| created\_at | TIMESTAMP                     | Record creation time |

## Resumes Table
| Column Name  | Type              | Description            |
| ------------ | ----------------- | ---------------------- |
| id           | INT PK            | Primary key            |
| user\_id     | INT FK → users.id | Candidate reference    |
| resume\_text | TEXT              | Extracted plain text   |
| parsed\_data | JSON              | Structured resume data |
| uploaded\_at | TIMESTAMP         | Upload timestamp       |

## Jobs Table
| Column Name      | Type              | Description                        |
| ---------------- | ----------------- | ---------------------------------- |
| id               | INT PK            | Primary key                        |
| recruiter\_id    | INT FK → users.id | Recruiter reference                |
| title            | VARCHAR           | Job title                          |
| description      | TEXT              | Job description                    |
| location         | VARCHAR           | Job location                       |
| employment\_type | VARCHAR           | Full-time / Part-time / Internship |
| posted\_at       | TIMESTAMP         | Posting timestamp                  |

## Skills Table
| Column Name | Type           | Description |
| ----------- | -------------- | ----------- |
| id          | INT PK         | Primary key |
| name        | VARCHAR UNIQUE | Skill name  |

## User Skills Table
| Column Name | Type               | Description         |
| ----------- | ------------------ | ------------------- |
| id          | INT PK             | Primary key         |
| user\_id    | INT FK → users.id  | Candidate reference |
| skill\_id   | INT FK → skills.id | Skill reference     |
| proficiency | INT                | Scale 1–5           |

## Job Skills Table
| Column Name | Type               | Description                    |
| ----------- | ------------------ | ------------------------------ |
| id          | INT PK             | Primary key                    |
| job\_id     | INT FK → jobs.id   | Job reference                  |
| skill\_id   | INT FK → skills.id | Skill reference                |
| priority    | INT                | 1 = required, 2 = nice-to-have |

---

## ⚡ Quick Start (Local Development)

> Requires: **Node.js** + **Python3**  

<details>
<summary>🖥️ Backend (Node.js + Knex.js)</summary>

```bash
cd backend
npm install
npm run dev   # for ts-node
```
</details> 

<details> <summary>🔥 Spark Job (PySpark + NLP)</summary>
   
```bash
cd spark
python3 -m venv venv
venv\Scripts\activate      # (Windows)
pip install pyspark spacy
python skill_gap_job.py ../data/sample_resume.json ../data/sample_job.json
```
</details>

<details> <summary>🌐 Frontend (HTML/JS + Chart.js)</summary>
    
```bash
cd frontend
# Option 1: Just open index.html in your browser
# Option 2: Run a local server
npx http-server .
```
