document.addEventListener('DOMContentLoaded', function() {
    fetch('get_open_jobs.php')
        .then(response => response.json())
        .then(data => {
            const jobList = document.getElementById('job-list');
            data.forEach(job => {
                const jobItem = document.createElement('div');
                jobItem.classList.add('job-item');
                jobItem.innerHTML = `
                    <h2>${job.job_title}</h2>
                    <p>${job.job_description}</p>
                    <p><strong>שם החברה:</strong> ${job.company_name}</p>
                    <p><strong>מיקום:</strong> ${job.job_location}</p>
                    <p><strong>סוג משרה:</strong> ${job.job_type}</p>
                    <p><strong>דרישות:</strong> ${job.job_requirements}</p>
                    <p><strong>טווח שכר:</strong> ${job.salary_range}</p>
                    <a href="apply_position.html" class="apply-button">הגש מועמדות</a>
                `;
                jobList.appendChild(jobItem);
            });
        })
        .catch(error => console.error('Error:', error));
});
