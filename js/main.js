const inputButton = document.querySelector('#btn');
const inputAnswear = document.querySelector('#result');

inputButton.addEventListener('click', answerText);

function calculation(a, b, c, action) {
  if (a === '' || b === '' || c === '' || action === '') {
    return 'Введите все поля ввода.';
  }

  const num1 = +a;
  const num2 = +b;
  const numModule = +c;

  let sum = `${num1} ${action} ${num2}`;
  let sum1 = eval(sum);

  if (action === '+' || action === '*' || action === '**') {
    while (sum1 > numModule) {
      sum1 = sum1 / 2;
    }

    if (sum1 > numModule) {
      return `Ваш ответ: ${sum} = ${Math.round(sum1)} (модуль: ${numModule})`;
    } else {
      return `Ваш ответ: ${sum} = ${Math.round(sum1)} (модуль: ${numModule})`;
    }
  } else {
    return 'Доступно всего лишь 4 действия (+, -, *, /).';
  }
}

function answerText() {
  const inputA = document.querySelector('#input-a').value;
  const inputB = document.querySelector('#input-b').value;
  const inputC = document.querySelector('#input-c').value;
  const inputActions = document.querySelector('#input-actions').value;

  const variableFun = calculation(inputA, inputB, inputC, inputActions);
  inputAnswear.innerHTML = variableFun;
}
