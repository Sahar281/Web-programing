document.addEventListener('DOMContentLoaded', function() {
    const openJobsLink = document.querySelector('.logo2[href="./Assets/openjobs.jpg"]');
    openJobsLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'open_jobs.html';
    });

    const addJobForm = document.getElementById('add-job-form');
    addJobForm.addEventListener('submit', function(event) {
        const jobTitle = document.getElementById('job-title').value.trim();
        const companyName = document.getElementById('company-name').value.trim();
        const jobDescription = document.getElementById('job-description').value.trim();
        const jobLocation = document.getElementById('job-location').value.trim();
        const jobRequirements = document.getElementById('job-requirements').value.trim();
        const jobType = document.getElementById('job-type').value.trim();
        const salaryRange = document.getElementById('salary-range').value.trim();

        if (!jobTitle || !companyName || !jobDescription || !jobLocation || !jobRequirements || !jobType) {
            alert('אנא מלא את כל השדות הנדרשים.');
            event.preventDefault();
        } else if (salaryRange && isNaN(salaryRange)) {
            alert('טווח השכר חייב להיות מספר.');
            event.preventDefault();
        }
    });
});
