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

/* 
Step - 6 Adds and subtracts the total for the courses selected by the User
*/
const registerAct = document.getElementById('activities');
const total = registerAct.querySelector('#activities-cost');
let price = 0;
registerAct.addEventListener('change', e => {
    // console.log(e.target);
    const cost = parseInt(e.target.getAttribute('data-cost'));
    // console.log(cost);
    if (e.target.checked){
        price += cost;
        total.textContent = `Total: $${price}`;
    } else {
        price -= cost;
        total.textContent = `Total: $${price}`;
    }
}); 

/*
    Step - 7
*/
const payment = document.querySelector('#payment');
const paymentOptions = payment.children;
paymentOptions[1].selected = true;

const creditCard = document.querySelector('.credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');

paypal.style.display = 'none';
bitcoin.style.display = 'none';

payment.addEventListener('change', e => {
    const paymentMethod = e.target.value;
    // console.log(paymentMethod);
    if (paymentMethod === 'paypal'){
        paypal.style.display = 'block';
        bitcoin.style.display = 'none';
        creditCard.style.display = 'none';

    } else if (paymentMethod === 'bitcoin'){
        bitcoin.style.display = 'block';
        paypal.style.display = 'none';
        creditCard.style.display = 'none';
    } else {
        creditCard.style.display = 'block';
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
    }
});