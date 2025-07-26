# 🌐 Static Node.js Server Portfolio

Це простий Node.js-сервер для запуску лендингової сторінки без використання Express чи сторонніх бібліотек.

## 🧰 Стек технологій

- Node.js (чистий)
- HTML, CSS, JS (в папці `public`)
- Власний модуль для роута (в `modules/`)

## 🚀 Запуск

1. Встанови Node.js (якщо ще не встановлено): [https://nodejs.org/](https://nodejs.org/)
2. Клонуй репозиторій:
   ```bash
   git clone https://github.com/Ihora29/static-node-portfolio.git
   cd static-node-portfolio
Запусти сервер:

bash
Копіювати
Редагувати
node app.js
Відкрий у браузері:

arduino
Копіювати
Редагувати
http://localhost:3000
📁 Структура проєкту
cpp
Копіювати
Редагувати
📦 root
 ┣ 📂 public/        — фронтенд лендинг
 ┣ 📂 modules/       — логіка роутінгу
 ┣ 📜 app.js         — головний файл сервера
 ┗ 📜 README.md
💡 Що я продемонстрував у цьому проєкті:
Робота з вбудованим http-модулем

Роутинг без фреймворків

Серверна обробка запитів та підключення HTML-файлів

Навички розділення коду на модулі
