let input;
let total = 0;

input = prompt('Введите число:');

while (input !== null) {
  if (!Number.isNaN(Number(input))) {
    total += Number(input);
    input = prompt('Введите еще число:');
  } else {
    alert('Было введено не число, попробуйте еще раз.');
    input = prompt('Введите еще число:');
  }
}

alert(`Общая сумма чисел равна ${total}`);