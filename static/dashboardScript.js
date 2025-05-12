// dashboardScript.js

window.onload = function () {
    const name = localStorage.getItem("userName");

    if (name) {
        document.getElementById("userName").textContent = name;
    } else {
        document.getElementById("userName").textContent = "Гость";
    }
};

// Кнопка выхода — работает только если пользователь был авторизован
function logout() {
    localStorage.removeItem("userEmail");
    window.location.href = "index.html"; // Перенаправление на главную
}
