const inputName = document.getElementById('name');
const email = document.getElementById('email');
const registerAct = document.getElementById('activities');
const ccNum = document.getElementById('cc-num');
const ccZip = document.getElementById('zip');
const ccCvv = document.getElementById('cvv');
const form = document.querySelector('form');
// Step - 3 Focus on INPUT Name Field
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
        colorOptions[0].textContent = 'Choose your color for design';
        if (value === dataTheme){
            colorOptions[0].selected = true;
            colorOptions[i].hidden = false;
        }
    }

});

/* 
Step - 6 Adds and subtracts the total for the courses selected by the User
*/

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

/*
    Step - 8
*/
/**
 * nameValidator func, evaluates the user's name value with the regex
 * @param {*} name - Takes the value and evaluates it 
 * @returns nameIsValid - returns a Boolean Value 
 */
function nameValidator(name){
    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(name);
    return nameIsValid;
}

/**
 * emailValidator func, evaluates the user provided value with the regex value
 * @param {*} email , user enetered value
 * @returns 
 */
function emailValidator(email){
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
    return emailIsValid;
}

/**
 * RegisterActValidator Function, is a validator, which evaluates all the checked or unchecked checkboxes from the Courses List, via,
 * looping through the Activities-box list.
 * @returns a Boolean Value True/False
 */
function registerActValidator(){
    let totalCourses = 0;
    const checkboxLabelList = document.querySelector('#activities-box').children;
    for (let i = 0; i < checkboxLabelList.length; i++){
        const checkbox = checkboxLabelList[i].firstElementChild;
        if (checkbox.checked){
            totalCourses += 1;
        }
    }
    return (totalCourses > 0);
}

/**
 * cardNumberValidator Function, performs a form validation on the credit card number
 * @param {*} card, recieves the Card Number's Value and then evaluates the Number
 * @returns a Boolean Value
 */
function cardNumberValidator(card){
        const cardIsValid = /^\d{13,16}$/.test(card);
        return cardIsValid;
}

/**
 * zip func, evaluates the zip code provided by the user and returns a boolean value
 * @param {*} cczip, user's provided value
 * @returns, a boolean value
 */
function zip(cczip){
    const zipIsValid = /^\d{5}$/.test(cczip);
    return zipIsValid;
}

/**
 * cvv func, evalutes the credit card's cvv number and returns a boolean value
 * @param {*} cvvNum, user given CVV
 * @returns , a boolean value
 */
function cvv(cvvNum){
    const cvvIsValid = /^\d{3}$/.test(cvvNum);
    return cvvIsValid;
}

form.addEventListener('submit', e => {
    if (!nameValidator(inputName.value)){ 
       e.preventDefault(); 
       const lastChild = inputName.parentNode.lastElementChild;
       lastChild.textContent = 'Name field cannot be empty';
       inputName.parentNode.classList.add('not-valid');
       inputName.parentElement.lastElementChild.style.display='block';
    } else {
        inputName.parentNode.classList.remove('not-valid');
        inputName.parentNode.classList.add('valid');
        inputName.parentElement.lastElementChild.style.display='none';
    }
    if (!emailValidator(email.value)){ 
        e.preventDefault()
        email.parentElement.className = 'not-valid';
        email.parentElement.lastElementChild.style.display = 'block';
    }else {
        email.parentElement.className = 'valid';
        email.parentElement.lastElementChild.style.display = 'none';
    }
    if (!registerActValidator()) {
        e.preventDefault();
        registerAct.classList.add('not-valid') ;
        registerAct.lastElementChild.style.display ='block';
    } else {

        registerAct.classList.remove('not-valid');
        registerAct.classList.add('valid');
        registerAct.lastElementChild.style.display ='none';
    }
    if (payment.value === 'credit-card'){
        if (!cardNumberValidator(ccNum.value)){
            e.preventDefault();
            ccNum.parentNode.className = 'not-valid';
            ccNum.parentNode.lastElementChild.style.display = 'block';
        }else {
            ccNum.parentNode.className = 'valid';
            ccNum.parentNode.lastElementChild.style.display = 'none';
        }
        if (!zip(ccZip.value)) {
            e.preventDefault();
            ccZip.parentNode.className = 'not-valid';
            ccZip.parentElement.lastElementChild.style.display = 'block';
        } else {
            ccZip.parentNode.className = 'valid';
            ccZip.parentElement.lastElementChild.style.display = 'none';
        }
        if (!cvv(ccCvv.value)) {
            e.preventDefault();
            ccCvv.parentNode.className = 'not-valid';
            ccCvv.parentNode.lastElementChild.style.display = 'block';
        }else {
            ccCvv.parentNode.className = 'valid';
            ccCvv.parentNode.lastElementChild.style.display = 'none';
        }
    }
});
const checkboxInput = document.querySelectorAll("#activities input");
// console.log(checkboxInput)
for (let i = 0; i < checkboxInput.length; i++){
    // console.log(checkboxInput[i]);
    checkboxInput[i].addEventListener('focus', e => {
        checkboxInput[i].parentElement.classList.add('focus');
    });
    checkboxInput[i].addEventListener('blur', e => {
        checkboxInput[i].parentElement.classList.remove('focus');
    })
}

registerAct.addEventListener('change', e => {
        const dayTime = e.target.getAttribute('data-day-and-time');
     for (let i = 0; i < checkboxInput.length; i++){
        if (e.target.checked){
                const otherDayTimes = checkboxInput[i].getAttribute('data-day-and-time');
                if (dayTime === otherDayTimes){
                    if (e.target.name !== checkboxInput[i].name){
                        checkboxInput[i].disabled = true;
                    }
                
                }
            } else {
                checkboxInput[i].disabled = false;
            }
        }
});

const basicInfo = document.querySelector('.basic-info');
basicInfo.addEventListener('keyup', e => {
    if (e.target.type === 'text'){
        if (!nameValidator(inputName.value)){ 
            const lastChild = inputName.parentNode.lastElementChild;
            lastChild.textContent = 'Name field can only have letters and no special character or numbers allowed';
            if (inputName.value === ''){
                lastChild.textContent = 'Name field cannot be empty';
            }
            inputName.parentNode.classList.add('not-valid');
            inputName.parentElement.lastElementChild.style.display='block';
        } else {
            inputName.parentNode.classList.remove('not-valid');
            inputName.parentNode.classList.add('valid');
            inputName.parentElement.lastElementChild.style.display='none';
              }      
    }     
    if (e.target.type === 'email'){
        if (!emailValidator(email.value)){ 
            const lastChild = email.parentNode.lastElementChild;
            if (email.value === ''){
                lastChild.textContent = 'Email field cannot be empty';
            }else {
                lastChild.textContent = 'Email must be in the format "abcd@domainName.com"'
            }
            email.parentElement.className = 'not-valid';
            email.parentElement.lastElementChild.style.display = 'block';
        }else {
            email.parentElement.className = 'valid';
            email.parentElement.lastElementChild.style.display = 'none';
        }
    }
});