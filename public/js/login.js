// login route, validates user login input from form
const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#loginUsername').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    }
};

// signup route, creates new user if username and password entered
const signupFormHandler = async (event) => {
    event.preventDefault()

    const username = document.querySelector('#signupUsername').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up.');
        }
    }
};

const passOnChange = async (e) => {

    let inputValue = e.target.value;
    console.log(inputValue)

    let validationMessage = '';

    if(inputValue.length>=1 && inputValue.length<6) {
        document.getElementById('password-validation-message').style.color='red';
        validationMessage = 'Password needs to be 6 or more characters!'
        console.log('<6  = ' + validationMessage)
        
    } 
    if (inputValue.length>=6) {
        document.getElementById('password-validation-message').style.color='green';
        validationMessage = 'Password meets length requirement!'
        console.log('>6  = ' + validationMessage)
    } 
    if (inputValue.length===0) {
        validationMessage = '';
    }
    document.getElementById('password-validation-message').innerHTML = validationMessage;

    console.log(validationMessage);
};

// event listeners
document
    .querySelector('.loginForm')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.signupForm')
    .addEventListener('submit', signupFormHandler);

    document
    .querySelector('.signup-pass')
    .addEventListener('input', passOnChange);