document.addEventListener('DOMContentLoaded', function() {
    const btnLogIn = document.getElementById('btn-log-in');
    const btnSignIn = document.getElementById('btn-sign-in');
    const logInSection = document.getElementById('log-in');
    const signInSection = document.getElementById('sign-in');

    // Set default active section to log in
    logInSection.classList.add('active');
    btnLogIn.classList.add('active');

    btnLogIn.addEventListener('click', () => {
        logInSection.classList.add('active');
        signInSection.classList.remove('active');
        btnLogIn.classList.add('active');
        btnSignIn.classList.remove('active');
    });

    btnSignIn.addEventListener('click', () => {
        signInSection.classList.add('active');
        logInSection.classList.remove('active');
        btnSignIn.classList.add('active');
        btnLogIn.classList.remove('active');
    });
});