document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");
    const message = document.getElementById("message");

    // 📌 Handle Registration
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const username = document.getElementById("reg-username").value;
        const email = document.getElementById("reg-email").value;
        const password = document.getElementById("reg-password").value;

        const response = await fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();
        message.textContent = data.message || data.error;
    });

    // 📌 Handle Login
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        const response = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        
        if (data.token) {
            localStorage.setItem("token", data.token); // Store JWT token
            message.textContent = "Login successful! Redirecting...";
            setTimeout(() => {
                window.location.href = "dashboard.html"; // Redirect to a dashboard page
            }, 2000);
        } else {
            message.textContent = data.error;
        }
    });
});
