// Step - 1 Focus on INPUT Name Field
const inputName = document.getElementById('name');
inputName.focus();

/*Step - 2 holding reference for <select> and Other Job roles into variable */
const jobRole = document.getElementById('title');
const otherJob = document.getElementById('other-job-role');

otherJob.style.display = 'none';

jobRole.addEventListener('change', e => {
    const value = e.target.value;
    if (value === 'other'){
        otherJob.style.display = 'inline-block';
    }
});
