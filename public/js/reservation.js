const reservationForm = $('#reservation-form');
const emailInput = $('#email-reservation');
const firstName = $('#fname-reservation');
const lastName = $('#lname-reservation');
const phoneNum = $('#pnumber-reservation');

reservationForm.on('submit', async (event) => {
    try {
        //prevent the default behavior
        event.preventDefault();
        //collect the login data (email and password)
        const data = {
            email: emailInput.val(),
            first_name: firstName.val(),
            last_name: lastName.val(),
            phone_number: phoneNum.val()
        }

        //send the login data to our login route
        const response = await fetch('/api/reservations', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });

        //if successful login, redirect to the profile page
        if (response.ok) {
            window.location.replace('/profile');
        }

    } catch (e) {
        console.log('something went wrong :(');
        console.log(e);
    }

})