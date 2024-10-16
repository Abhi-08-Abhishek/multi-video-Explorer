// login.js

function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    // Get username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For demonstration purposes, a simple login check
    if (username === 'Abhishek' && password === 'password') {
        // Redirect to the main page (you should replace 'index.html' with your actual video collection page)
        window.location.href = 'login.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
