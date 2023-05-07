//FRONTEND JAVASCRIPT to be used by my "login.handlebars" template
console.log('Hello from login.js!');
const loginForm = $('#login-form');
const emailInput = $('#login-email');
const passwordInput = $('#login-pw');
const userName = $('login-name');

loginForm.on('submit', async (event) => {
    try {
        //prevent the default behavior
        event.preventDefault();
        //collect the login data (email and password)
        const data = {
            name: userName.val(),
            email: emailInput.val(),
            password: passwordInput.val()
        }

        //send the login data to our login route
        const response = await fetch('/api/users/login', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });

        //deal with the response
        const responseData = await response.json();
        console.log(responseData);
        //if successful login, redirect to the profile page
        if (responseData.success) {
            window.location.replace('/profile');
        }

    } catch (e) {
        console.log('something went wrong :(');
        console.log(e);
    }

})