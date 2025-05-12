// firebaseConfig.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAdhoFM-pmKzJ-l10nxlNwCWevmlZA5pwQ", // Ваш ключ
  authDomain: "filmore-bdc98.firebaseapp.com", // Домен
  projectId: "filmore-bdc98", // Идентификатор проекта
  storageBucket: "filmore-bdc98.appspot.com", // Бакет для хранения
  messagingSenderId: "846546561199", // Идентификатор отправителя
  appId: "1:846546561199:web:2bd1860a6be13dddb58c5a", // ID приложения
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Получаем объект аутентификации

export { auth };
