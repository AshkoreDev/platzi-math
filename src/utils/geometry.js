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


squareBtn.addEventListener('click', calculateSquare);