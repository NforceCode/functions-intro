// 1. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие:
// isAdult(20); // true
// isAdult(4); // false

function isAdult(age) {

  const ageConverted = +age;
  if (isNaN(ageConverted)) {
    return null;
  }

  return ageConverted > 18 ? true : false;
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

function checkTriangle (a, b, c) {

  const aConverted = +a;
  const bConverted = +b;
  const cConverted = +c;

  if(isNaN(aConverted - bConverted - cConverted)){
    return null;
  }

  if((aConverted + bConverted > cConverted) && (aConverted + cConverted > bConverted) && (cConverted + bConverted > aConverted)) {
    return true;
  }

  return false;
}

// 4. Написать функции расчета площадей (поверхности) следующих фигур/тел: ромб, цилиндр, треугольника, прямоугольника

function triangleArea (numA, numB, numC) {

  // реализация нахождения площади треугольника по трем сторонам 

  const a = +numA;
  const b = +numB;
  const c = +numC;

  if(isNaN(a - b - c)){
    return null;
  }

  const p = (a + b + c) / 2;

  return (p*(p-a)*(p-b)*(p-c)) ** (1/2);
  
}

function rectangleArea (numA, numB) {

  const lengthA = +numA;
  const lengthB = +numB;

  if(isNaN(lengthA - lengthB)){
    return null;
  }

  return lengthA*lengthB;
}

function rhombusArea (numA, numB) {

  const lengthA = +numA;
  const lengthB = +numB;

  if(isNaN(lengthA - lengthB)){
    return null;
  }

  return lengthA * lengthB * 0.5;
  
}

function cylinderArea (numR, numH) {

  const lengthR = +numR;
  const lengthH = +numH;

  if(isNaN(lengthR - lengthH)){
    return null;
  }

  return 2 * Math.PI * lengthR * lengthH;
}
function trapezoidArea (numA, numB, numH) {

  const lengthA = +numA;
  const lengthB = +numB;
  const lengthH = +numH;

  if(isNaN(lengthA - lengthB - lengthH)){
    return null;
  }

  return 0.5 * (lengthA + lengthB) * lengthH;
}