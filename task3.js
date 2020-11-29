const ADMIN_PASSWORD = 'jqueryismyjam';
let enterData = prompt('Введите пароль');
let message;

if (enterData) {
    message = enterData === ADMIN_PASSWORD
        ? 'Добро пожаловать!'
        : 'Доступ запрещен, неверный пароль!';
} else {
   message = 'Отменено пользователем!';
}
alert(message);