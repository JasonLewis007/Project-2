console.log('Hello from signup.js!');
const signupForm = $('#signup_form');
const emailInput = $('#signup-email');
const passwordInput = $('#signup-password');
const fnameInput = $('#signup-fn');
const lnameInput = $('#signup-ln');
const pnumberInput = $('#signup-pn');


signupForm.on('submit', async (event) => {
    try {
        //prevent the default behavior
        event.preventDefault();
        //collect the login data (email and password)
        const data = {
            email: emailInput.val(),
            password: passwordInput.val(),
            firstName: fnameInput.val(),
            lastName: lnameInput.val(),
            phoneNumber: pnumberInput.val()
        }

        //send the login data to our login route
        const response = await fetch('/api/users/signup', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });

       
        //if successful login, redirect to the profile page
        if (response.ok) {
            window.location.replace('/');
        }

    } catch (e) {
        console.log('something went wrong :(');
        console.log(e);
    }

})