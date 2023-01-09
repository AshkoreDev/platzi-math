// SQUARE
const squareSide = document.getElementById('squareSide');
const squareBtn = document.getElementById('squareBtn');
const squareResult = document.getElementById('squareResult');

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
    `Perímetro: ${perimeter}cm
      Area: ${area}cm^2.`;
  }
}

// CIRCLE
const circleRadius = document.getElementById('circleRadius');
const circleBtn = document.getElementById('circleBtn');
const circleResult = document.getElementById('circleResult');

function circleDiameter(radius) {

  return radius * 2;
}

function circlePerimeter(radius) {

  const diameter = circleDiameter(radius);
  return diameter * Math.PI;
}

function circleArea(radius) {

 return (radius * radius) * Math.PI;
}

function calculateCircle() {

  const radius = parseInt(circleRadius.value);

  if(radius == 0 || isNaN(radius)) {

    return circleResult.innerText = `ERROR: El radio del círculo debe ser mayor a 0.`;

  } else {

    const perimeter = circlePerimeter(radius, Math.PI).toFixed(2);
    const area = circleArea(radius, Math.PI).toFixed(2);

    return circleResult.innerText =
    `Perímetro: ${perimeter} cm.
     Área: ${area} cm^2.`;
  }
}

// TRIANGLE
const triangleRightSide = document.getElementById('triangleRightSide');
const triangleLeftSide = document.getElementById('triangleLeftSide');
const triangleBase = document.getElementById('triangleBase');
const triangleHeight = document.getElementById('triangleHeight');
const triangleBtn = document.getElementById('triangleBtn');
const triangleResult = document.getElementById('triangleResult');

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

if (squareBtn || circleBtn || triangleBtn) {

  squareBtn.addEventListener('click', calculateSquare);
  circleBtn.addEventListener('click', calculateCircle);
  triangleBtn.addEventListener('click', calculateTriangle);
}