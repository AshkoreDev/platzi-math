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


squareBtn.addEventListener('click', calculateSquare);
circleBtn.addEventListener('click', calculateCircle);