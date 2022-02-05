// Step - 3 Focus on INPUT Name Field
const inputName = document.getElementById('name');
inputName.focus();

/*Step - 4 holding reference for <select> and Other Job roles into variable */
const jobRole = document.getElementById('title');
const otherJob = document.getElementById('other-job-role');

otherJob.style.display = 'none';

//Step-5 changing the other-job-role Input as per the the Option selected from the JOb Role Section
jobRole.addEventListener('change', e => {
    const value = e.target.value;
    if (value === 'other'){
        otherJob.style.display = 'inline-block';
    }
    else if (value !== 'other'){
        otherJob.style.display = 'none';
    }
});
