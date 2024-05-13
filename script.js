class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.form.addEventListener('submit', this.validate.bind(this));
    }

    validate(event) {
        event.preventDefault();
        let isValid = true;

        // Örnek validasyon: Ad alanı boş olmamalı
        const nameField = this.form.querySelector('#name');
        if (nameField.value.trim() === '') {
            this.showError(nameField, 'Lütfen adınızı girin.');
            isValid = false;
        }

        // Burada diğer validasyon kontrolleri yapılabilir...

        if (isValid) {
            // Form gönderilebilir
            this.form.submit();
        }
    }

    showError(field, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }
}

// Kullanım:
const formValidator = new FormValidator('myForm');


class ThemeChanger {
    constructor() {
        this.themeButton = document.getElementById('themeButton');
        this.themeButton.addEventListener('click', this.toggleTheme.bind(this));
    }

    toggleTheme() {
        document.body.classList.toggle('dark-theme');
        // Kullanıcının teması tercihini saklamak için gereken kodlar buraya eklenebilir
    }
}

// Kullanım:
const themeChanger = new ThemeChanger();

class DropdownMenu {
    constructor() {
        this.menuButton = document.getElementById('menuButton');
        this.menuContent = document.getElementById('menuContent');
        this.menuButton.addEventListener('click', this.toggleMenu.bind(this));
    }

    toggleMenu() {
        this.menuContent.classList.toggle('show');
    }
}

// Kullanım:
const dropdownMenu = new DropdownMenu();
