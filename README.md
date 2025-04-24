# Vaultino - LocalStorage Version 🔐

Vaultino is a minimalist password manager. This version of Vaultino uses **LocalStorage** to save passwords in the browser itself. It's ideal for quick access and experimentation but lacks user authentication.

### 🚀 Live Demo
Check it out here: [Vaultino LocalStorage](https://vaultino-rmb.netlify.app)

---

## ⚠️ Important Notes

- ❌ **No Authentication**: This version does not have login/signup features. Anyone who opens the app in the same browser can access stored passwords.
- 🌐 **Browser-Specific**: Passwords are saved using `localStorage`. They are:
  - Tied to the specific browser where you used the app
  - **Not accessible from another browser or device**
  - **Deleted if the browser’s cache is cleared**

---

## 🛠️ Tech Stack

- **Frontend**: React + Redux
- **State Persistence**: LocalStorage
- **No Backend Required**

---

## 📦 Features

- Add, edit, and delete saved passwords
- Copy username/password to clipboard
- View password toggle
- Light and dark mode (soon)
- Fully functional without a backend or database

---

## 📌 Disclaimer

> This is not a secure or production-ready password manager. Do not store real credentials. 
 For a secure and full-stack implementation with user authentication and backend storage, check out:
> - [Vaultino Frontend Version](https://github.com/Rahulbabar222/Vaultino-Frontend)
> - [Vaultino Backend Version](https://github.com/Rahulbabar222/Vaultino-Backend)


---

## 📃 License

MIT License