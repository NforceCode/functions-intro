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
 * @param {number} numA длина стороны треугольника
 * @param {number} numB длина стороны треугольника
 * @param {number} numC длина стороны треугольника
 * @returns {(boolean|null)} true если треугольник возможен, false если нет и null если введенные данные не были числами
 */

function checkTriangle (numA, numB, numC) {

  const lengthA = +numA;
  const lengthB = +numB;
  const lengthC = +numC;

  if(isNaN(lengthA - lengthB - lengthC)){
    return null;
  }

  if((lengthA + lengthB > lengthC) && (lengthA + lengthC > lengthB) && (lengthC + lengthB > lengthA)) {
    return true;
  }

  return false;
}


/**
 * Расчет площади треугольника по формуле Герона
 * @param {number} numA длина стороны треугольника
 * @param {number} numB длина стороны треугольника
 * @param {number} numC длина стороны треугольника
 * @returns {(number|null)} площадь треугольника либо null если введенные данные не были числами
 */

function getTriangleArea (numA, numB, numC) {

  const lengthA = +numA;
  const lengthB = +numB;
  const lengthC = +numC;

  if(isNaN(lengthA - lengthB - lengthC)){
    return null;
  }

  const p = (lengthA +lengthB + lengthC) / 2;

  return (p*(p-lengthA)*(p-lengthB)*(p-lengthC)) ** (1/2);
  
}

/**
 * Расчет площади прямогульника
 * @param {number} numA длина стороны прямогульника
 * @param {number} numB длина стороны прямогульника
 * @returns {(number|null)} площадь прямоугольника либо null если введенные данные не были числами
 */

function getRectangleArea (numA, numB) {

  const lengthA = +numA;
  const lengthB = +numB;

  if(isNaN(lengthA - lengthB)){
    return null;
  }

  return lengthA * lengthB;
}

/**
 * Расчет площади ромба по двум диагоналям
 * @param {number} numA диагональ ромба
 * @param {number} numB диагональ ромба
 * @returns {(number|null)} площадь ромба либо null если введенные данные не были числами
 */

function getRhombusArea (numA, numB) {

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

function getCylinderArea (numR, numH) {

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

function getTrapezoidArea (numA, numB, numH) {

  const lengthA = +numA;
  const lengthB = +numB;
  const lengthH = +numH;

  if(isNaN(lengthA - lengthB - lengthH)){
    return null;
  }

  return 0.5 * (lengthA + lengthB) * lengthH;
}