const pricePerDroid = 3000;
let credits = 23580;
const droidQuantity = prompt('Сколько дроидов вы хотите купить?');
let totalPrice;

    if (droidQuantity) {
        if (totalPrice) {
        totalPrice = droidQuantity * pricePerDroid;

            if (totalPrice <= credits) {
                console.log(`Вы купили ${droidQuantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
            }
            else {
                console.log('Недостаточно средств на счету!');
            }
        } else {
            console.log('Пожалуйста введите значение в цифровом виде.');
          }
}
    else if (droidQuantity === null) {
        console.log('Отменено пользователем!');
    }
