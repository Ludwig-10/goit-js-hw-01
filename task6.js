let total = 0;
let input;

while(true) {
  input = prompt('Введите число');

  if (input === null) {
   
    break;
  }
  
  input += Number(input);
  total += input
}
alert(`Общая сумма чисел равна ${total}`);
