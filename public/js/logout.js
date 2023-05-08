const logoutButton = $("#logout");

logoutButton.click(async (event) => {
    console.log('clicked!')
    const response = await fetch('/api/users/logout', {
        method: 'POST'
    });

    if (response.ok) {
        window.location.replace('/');
    }

})