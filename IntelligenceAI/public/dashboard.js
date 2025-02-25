document.addEventListener("DOMContentLoaded", async () => {
    const message = document.getElementById("dashboard-message");
    const logoutBtn = document.getElementById("logout");

    const token = localStorage.getItem("token");
    if (!token) {
        message.textContent = "Unauthorized! Please log in.";
        setTimeout(() => window.location.href = "index.html", 2000);
        return;
    }

    // Fetch protected route
    const response = await fetch("http://localhost:3000/api/protected", {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}` }
    });

    const data = await response.json();
    message.textContent = data.message || "Protected content loaded.";

    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("token");
        window.location.href = "index.html";
    });
});
