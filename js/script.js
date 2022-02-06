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

/* 
    Step - 6, 
        1- Selecting Color <select>, design <select> and color(options) color.children
        2 - disable color section and then regains it once the Design <select> is selected with refined options
*/
const design = document.getElementById('design');
const color = document.getElementById('color');
const colorOptions = color.children;

color.disabled = true;

design.addEventListener('change', e => {
    color.disabled = false;
    for (let i = 0; i < colorOptions.length; i++){
        const value = e.target.value;
        const dataTheme = colorOptions[i].getAttribute('data-theme');
        colorOptions[i].hidden = true;
        if (value === dataTheme){
            colorOptions[i].hidden = false;
        }
    }

});

// /* Step -6
// */
// const registerAct = document.getElementById('activities');
// registerAct.addEventListener('change', e => {

// }); 