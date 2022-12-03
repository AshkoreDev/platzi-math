// SQUARE
function squarePerimeter(side) {

  return side * 4;
}

function squareArea(side) {

  return side * side;
}

function calculateSquare() {

  const side = parseInt(squareSide.value);

  if(side == 0 || isNaN(side)) {

    return squareResult.textContent = `ERROR: El lado del cuadrado debe ser mayor a 0.`;

  } else {

    const perimeter = squarePerimeter(side);
    const area = squareArea(side);

    return squareResult.textContent =
    `Perímetro: ${perimeter} cm.
     Área: ${area} cm^2.`;
  }
}

// CIRCLE
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

    return circleResult.textContent = `ERROR: El radio del círculo debe ser mayor a 0.`;

  } else {

    const perimeter = circlePerimeter(radius, Math.PI).toFixed(2);
    const area = circleArea(radius, Math.PI).toFixed(2);

    return circleResult.textContent =
    `Perímetro: ${perimeter} cm.
     Área: ${area} cm^2.`;
  }
}

// TRIANGLE

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

    return triangleResult.textContent = `ERROR: Los datos del Tríangulo deben ser mayor a 0.`;

  } else {

    const perimeter = trianglePerimeter(rightSide, leftSide, base);
    const area = triangleArea(base, height);

    return triangleResult.textContent =
    `Perímetro: ${perimeter} cm.
     Área: ${area} cm^2.`;
  }
}

squareBtn.addEventListener('click', calculateSquare);
circleBtn.addEventListener('click', calculateCircle);
triangleBtn.addEventListener('click', calculateTriangle);