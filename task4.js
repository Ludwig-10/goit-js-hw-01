const pricePerDroid = 3000;
let credits = 23580;
let droidQuantity = prompt('Сколько дроидов вы хотите купить?');
let totalPrice;

    if (droidQuantity) {
        if (Number.isNaN(Number(totalPrice))) {
        totalPrice = droidQuantity * pricePerDroid;

            if (totalPrice <= credits) {
                alert(`Вы купили ${droidQuantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
            }
            else {
                alert('Недостаточно средств на счету!');
            }
        }
}
    else {
    alert('Отменено пользователем!');
    }
