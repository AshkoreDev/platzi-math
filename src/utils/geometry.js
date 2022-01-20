// --------> SQUARE
const squareSide = document.getElementById('squareSide');
const squareResult = document.getElementById('squareResult');
const squareBtn = document.getElementById('squareBtn');

function squarePerimeter(side) {
  return side * 4;
}

function squareArea(side) {
  return side * side;
}

function calculateSquare() {
  const side = parseInt(squareSide.value);

  if(side == 0 || isNaN(side)) {
    return squareResult.innerText = `ERROR: El lado del cuadrado debe ser mayor a 0.`;
  } else {
    const perimeter = squarePerimeter(side);
    const area = squareArea(side);
    return squareResult.innerText =
    `Perímetro: ${perimeter} cm.
     Área: ${area} cm^2.`;
  }
}

if(squareBtn) {
  squareBtn.addEventListener('click', calculateSquare);
}


// --------> CIRCLE
const circleRadius = document.getElementById('circleRadius');
const circleResult = document.getElementById('circleResult');
const circleBtn = document.getElementById('circleBtn');
const Pi = Math.PI;

function circleDiameter(radius) {
  return radius * 2;
}

function circlePerimeter(radius) {
  const diameter = circleDiameter(radius);
  return diameter * Pi;
}

function circleArea(radius) {
 return (radius * radius) * Pi;
}

function calculateCircle() {
  const radius = parseInt(circleRadius.value);

  if(radius == 0 || isNaN(radius)) {
    return circleResult.innerText = `ERROR: El radio del círculo debe ser mayor a 0.`;
  } else {
    const perimeter = circlePerimeter(radius, Pi);
    const area = circleArea(radius, Pi);
    return circleResult.innerText =
    `Perímetro: ${perimeter} cm.
     Área: ${area} cm^2.`;
  }
}

if(circleBtn) {
  circleBtn.addEventListener('click', calculateCircle);
}


// --------> TRIANGLE
const triangleRightSide = document.getElementById('triangleRightSide');
const triangleLeftSide = document.getElementById('triangleLeftSide');
const triangleBase = document.getElementById('triangleBase');
const triangleHeight = document.getElementById('triangleHeight');
const triangleResult = document.getElementById('triangleResult');
const triangleBtn = document.getElementById('triangleBtn');

function trianglePerimeter(rightSide, leftSide, base) {
  return rightSide + leftSide + base;
}

function triangleArea(base, height) {
  return (base * height) / 2;
}

function calculateTriangle() {
  const rightSide = parseInt(triangleRightSide.value);
  const leftSide = parseInt(triangleLeftSide.value);
  const base = parseInt(triangleBase.value);
  const height = parseInt(triangleHeight.value);

  if(rightSide == 0 || leftSide == 0 || base == 0 || isNaN(rightSide) || isNaN(leftSide) || isNaN(base)) {
    return triangleResult.innerText = `ERROR: Los datos del Tríangulo deben ser mayor a 0.`;
  } else {
    const perimeter = trianglePerimeter(rightSide, leftSide, base);
    const area = triangleArea(base, height);
    return triangleResult.innerText =
    `Perímetro: ${perimeter} cm.
     Área: ${area} cm^2.`;
  }
}

if(triangleBtn) {
  triangleBtn.addEventListener('click', calculateTriangle);
}


// --------> ISOSCELES TRIANGLE
const isTriangleRightSide = document.getElementById('isTriangleRightSide');
const isTriangleLeftSide = document.getElementById('isTriangleLeftSide');
const isTriangleBase = document.getElementById('isTriangleBase');
const isTriangleResult = document.getElementById('isTriangleResult');
const isTriangleBtn = document.getElementById('isTriangleBtn');

function isTriangleHeight(rightSide, leftSide, base) {
   const smallRightSide = base / 2;
    const smallBase = rightSide;

    const smallRightSide2 = smallRightSide * smallRightSide;
    const smallBase2 = smallBase * smallBase;

    const smallSideL = Math.sqrt(smallBase2 - smallRightSide2);
    const height = smallSideL;

    return height;
}

function calculateIsTriangle() {
  const rightSide = parseInt(isTriangleRightSide.value);
  const leftSide = parseInt(isTriangleLeftSide.value);
  const base = parseInt(isTriangleBase.value);

  if(rightSide == 0 || leftSide == 0 || base == 0 || isNaN(rightSide) || isNaN(leftSide) || isNaN(base)) {
    return isTriangleResult.innerText = `ERROR: Los datos del Tríangulo Isósceles deben ser mayor a 0.`;
  } else {
    if(rightSide != leftSide) {
     return isTriangleResult.innerText = `ERROR: El lado derecho y el lado izquierdo no son iguales.`;
    } else {
      const height = isTriangleHeight(rightSide, leftSide, base );
      return isTriangleResult.innerText = `Altura: ${height} cm.`;
    }
  }
}

if(isTriangleBtn) {
  isTriangleBtn.addEventListener('click', calculateIsTriangle);
}