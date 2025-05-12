import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { auth } from "./firebaseConfig.js";

// Регистрация нового пользователя
window.register = function () {
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;

  if (!name || !email || !password) {
    alert("Пожалуйста, заполните все поля.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Сохраняем данные в localStorage
      localStorage.setItem("userName", name);
      localStorage.setItem("userEmail", email);
      alert("Регистрация успешна!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("Ошибка регистрации: " + error.message);
    });
};

// Вход пользователя
window.login = function () {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("Введите email и пароль.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // При успешном входе: сохраняем email
      localStorage.setItem("userEmail", email);

      // Сейчас имя сохраняется в localStorage при регистрации
      alert("Вход выполнен!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("Ошибка входа: " + error.message);
    });
};

// Выход пользователя
window.logout = function () {
  signOut(auth).then(() => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    alert("Вы вышли из аккаунта.");
    window.location.href = "index.html";
  });
};
