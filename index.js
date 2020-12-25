/**
 * Проверяет пользователя на сеовршеннолетие 
 * @param {number} age возраст пользователя
 * @returns {(boolean|null)} true если пользователю 18 лет и больше, false если ему меньше 18 и null если введенные данные не были числом
 */

function isAdult(age) {

  const ageConverted = +age;

  if (isNaN(ageConverted)) {
    return null;
  }

  return ageConverted >= 18 ? true : false;
}

/**
 * Проверяет кратность первого числа второму
 * @param {number} num1 число, проверяемое на кратность
 * @param {number} num2 число, на кратность которому будут проверять
 * @returns {(boolean|null)} true если первое число кратно второму иначе false, null если введенные данные не были числами
 */

function checkMultiplicity (num1, num2) {

  const numConverted1 = +num1;
  const numConverted2 = +num2;

  if(isNaN(numConverted1 - numConverted2)) {
    return null;
  }

  return numConverted1 % numConverted2 === 0 ? true : false;
}

/**
 * Проверка возможности треугольника
 * @param {number} a длина стороны треугольника
 * @param {number} b длина стороны треугольника
 * @param {number} c длина стороны треугольника
 * @returns {(boolean|null)} true если треугольник возможен, false если нет и null если введенные данные не были числами
 */

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
/**
 * Расчет площади треугольника по формуле Герона
 * @param {number} numA длина стороны треугольника
 * @param {number} numB длина стороны треугольника
 * @param {number} numC длина стороны треугольника
 * @returns {(number|null)} площадь треугольника либо null если введенные данные не были числами
 */
function triangleArea (numA, numB, numC) {

  const a = +numA;
  const b = +numB;
  const c = +numC;

  if(isNaN(a - b - c)){
    return null;
  }

  const p = (a + b + c) / 2;

  return (p*(p-a)*(p-b)*(p-c)) ** (1/2);
  
}

/**
 * Расчет площади прямогульника
 * @param {number} numA длина стороны прямогульника
 * @param {number} numB длина стороны прямогульника
 * @returns {(number|null)} площадь прямоугольника либо null если введенные данные не были числами
 */

function rectangleArea (numA, numB) {

  const lengthA = +numA;
  const lengthB = +numB;

  if(isNaN(lengthA - lengthB)){
    return null;
  }

  return lengthA*lengthB;
}

/**
 * Расчет площади ромба по двум диагоналям
 * @param {number} numA диагональ ромба
 * @param {number} numB диагональ ромба
 * @returns {(number|null)} площадь ромба либо null если введенные данные не были числами
 */

function rhombusArea (numA, numB) {

  const lengthA = +numA;
  const lengthB = +numB;

  if(isNaN(lengthA - lengthB)){
    return null;
  }

  return lengthA * lengthB * 0.5;
  
}

/**
 * Расчет площади цилиндра
 * @param {*} numR радиус цилиндра
 * @param {*} numH высота цилиндра
 * @returns {(number|null)} площадь цилиндра либо null если введенные данные не были числами
 */

function cylinderArea (numR, numH) {

  const lengthR = +numR;
  const lengthH = +numH;

  if(isNaN(lengthR - lengthH)){
    return null;
  }

  return 2 * Math.PI * lengthR * lengthH;
}

/**
 * Расчет площади трапеции по длине двух оснований и высоте
 * @param {number} numA длина основания
 * @param {number} numB длина основания
 * @param {number} numH длина высоты
 * @returns {(number|null)} площадь трапеции либо null если введенные данные не были числами
 */

function trapezoidArea (numA, numB, numH) {

  const lengthA = +numA;
  const lengthB = +numB;
  const lengthH = +numH;

  if(isNaN(lengthA - lengthB - lengthH)){
    return null;
  }

  return 0.5 * (lengthA + lengthB) * lengthH;
}