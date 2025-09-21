# Simple PySpark job placeholder for skill extraction & gap detection.
# Usage: python spark/skill_gap_job.py data/sample_resume.json data/sample_job.json
import sys, json
from pyspark.sql import SparkSession

spark = SparkSession.builder.appName('skill-gap-demo').getOrCreate()

def load_json(path):
    with open(path, 'r') as f:
        return json.load(f)

def extract_skills_simple(text, skill_vocab):
    t = text.lower()
    return [s for s in skill_vocab if s in t]

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print('Usage: python skill_gap_job.py <resume.json> <job.json>')
        sys.exit(1)
    resume = load_json(sys.argv[1])
    job = load_json(sys.argv[2])
    # small vocab - extend for production
    skill_vocab = ['python','java','sql','spark','pyspark','docker','kubernetes','aws','react','node','tensorflow','pytorch','nlp','linux']
    r_skills = extract_skills_simple(resume.get('text',''), skill_vocab)
    j_skills = extract_skills_simple(job.get('description','') + ' ' + ' '.join(job.get('required_skills',[])), skill_vocab)
    missing = [s for s in j_skills if s not in r_skills]
    result = {'resume_skills': r_skills, 'job_skills': j_skills, 'missing_skills': missing, 'match_percent': int(100 * (len(j_skills) - len(missing)) / max(1,len(j_skills)))}
    print(json.dumps(result, indent=2))
    spark.stop()
