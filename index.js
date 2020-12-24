// 1. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие:
// isAdult(20); // true
// isAdult(4); // false

function isAdult(age) {

  const convertedAge = +age;
  if (isNaN(convertedAge)) {
    return null;
  }

  return convertedAge > 18 ? true : false;
}

// 2. Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:
// checkMultiplicity(25, 5) // true
// checkMultiplicity(15, 3) // true
// checkMultiplicity(15, 5) // true
// checkMultiplicity(15, 4) // false

function checkMultiplicity (num1, num2) {
  
  const numConverted1 = +num1;
  const numConverted2 = +num2;

  if(isNaN(numConverted1 - numConverted2)) {
    return null;
  }

  return num1%num2 === 0 ? true : false;
}

// 3. Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет




// 4. Написать функции расчета площадей (поверхности) следующих фигур/тел: ромб, цилиндр, треугольника, прямоугольника


