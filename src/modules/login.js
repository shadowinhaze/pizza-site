export default function login() {
    const loginButton = document.querySelector('.button-auth');
    const loginOutButton = document.querySelector('.button-out');
    const authUserName = document.querySelector('.user-name');
    const authWindow = document.querySelector('.modal-auth');
    const authWindowCloser = document.querySelector('.close-auth');

    const logInForm = document.getElementById('logInForm');
    const inputLogin = document.getElementById('login');
    const inputPass = document.getElementById('password');

    const saveUser = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
    };

    const cleanUser = () => {
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
        }
    };

    const checkUser = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            login(user)
        }
    }

    const login = (user) => {
        loginButton.classList.add('is-hidden');
        loginOutButton.classList.remove('is-hidden');
        authUserName.classList.remove('is-hidden');
        authUserName.innerText = user.login;
        authWindow.classList.remove('is-open');
    };

    const logout = () => {
        cleanUser();
        loginButton.classList.remove('is-hidden');
        loginOutButton.classList.add('is-hidden');
        authUserName.classList.add('is-hidden');
        authUserName.innerText = '';
    };

    logInForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const user = {
            login: inputLogin.value,
            pass: inputPass.value
        }
        saveUser(user);
        login(user);
    });

    loginButton.addEventListener('click', () => {
        authWindow.classList.toggle('is-open');
    });

    authWindowCloser.addEventListener('click', () => {
        authWindow.classList.toggle('is-open');
    });

    loginOutButton.addEventListener('click', logout)
    checkUser();
}