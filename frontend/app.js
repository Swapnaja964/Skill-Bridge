document.getElementById('analyzeBtn').addEventListener('click', async () => {
  const text = document.getElementById('resumeText').value;
  if (!text.trim()) return alert('paste resume text to analyze');
  // For demo, call local mock endpoint if available; otherwise run simple client-side detection
  const candidates = ['python','java','sql','spark','pyspark','docker','kubernetes','aws','react','node','tensorflow','pytorch','nlp','linux'];
  const found = candidates.filter(c => text.toLowerCase().includes(c));
  const skillsList = document.getElementById('skillsList');
  skillsList.innerHTML = '';
  found.forEach(s => { const li = document.createElement('li'); li.textContent = s; skillsList.appendChild(li); });
  document.getElementById('results').style.display = 'block';
  // sample chart: percentages for matched vs missing against a sample job
  const jobSkills = ['python','aws','docker','kubernetes','spark'];
  const matched = jobSkills.filter(s => found.includes(s)).length;
  const data = [matched, jobSkills.length - matched];
  const ctx = document.getElementById('gapChart').getContext('2d');
  if (window.myChart) window.myChart.destroy();
  window.myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Matched','Missing'],
      datasets: [{ data, backgroundColor: ['#36a2eb','#ff6384'] }]
    }
  });
});
