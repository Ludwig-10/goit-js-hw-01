const ADMIN_PASSWORD = 'jqueryismyjam';
const enterData = prompt('Введите пароль');
let message;

if (enterData) {

    message = enterData === ADMIN_PASSWORD
        ? 'Добро пожаловать!'
        : 'Доступ запрещен, неверный пароль!';
} else if (enterData === null) {
   message = 'Отменено пользователем!';
}
alert(message);