document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que el formulario se envíe por defecto

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Aquí puedes definir tus credenciales válidas
        const validUsername = 'Nahomy';
        const validPassword = 'Teamo';

       if (username === validUsername && password === validPassword) {
            errorMessage.textContent = '';
            errorMessage.classList.remove('show');
            
            // Esto redirige a tu archivo de la rosa
            // Asegúrate de que el archivo de la rosa se llame exactamente "index.html"
            window.location.href = '../index1.html'; 
            
        } else {
            errorMessage.textContent = 'Usuario o contraseña incorrectos.';
            errorMessage.classList.add('show');
            passwordInput.value = ''; 
        }
    });
});