let deliveryCountry = prompt('Введите страну доставки!');
let deliveryPrice;

if (deliveryCountry) {
    deliveryCountry = deliveryCountry.charAt(0).toUpperCase() + deliveryCountry.slice(1).toLowerCase();

    switch (deliveryCountry) {
        case 'Китай':
            deliveryPrice = 100;
          break;
        case 'Чили':
            deliveryPrice = 250;
          break;
        case 'Австралия':
            deliveryPrice = 170;
          break;
        case 'Индия':
            deliveryPrice = 80;
          break;
        case 'Ямайка':
            deliveryPrice = 120;
          break;
    
        default:
          alert('В Вашей стране доставка не доступна.');
      }
}
   else {
            alert('Отменено пользователем!');
          }
    if (deliveryPrice) {
        alert(`Доставка в ${deliveryCountry} будет стоить ${deliveryPrice} кредитов.`);
}
