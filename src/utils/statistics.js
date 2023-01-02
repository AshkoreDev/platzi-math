let listTotal = [];

function addData() {
  const list = parseInt(statisticsList.value);

  if(list == 0 || isNaN(list)) {

    return statisticsResult.innerText = `ERROR: Debe ingresar los datos necesarios.`;

  } else {

    listTotal.push(list);
    document.getElementById('statisticsList').value = '';
    return statisticsResult.innerText = `Datos agregados.`;
  }
}

// AVERAGE
function arithmeticAverage(list) {

  const addition = list.reduce(

    function(accumulator = 0, currentValue) {

      return accumulator + currentValue;
    }
  );

  return addition / list.length;
}

// MEDIAN
let median;

function pair(num) {

  return (num % 2 === 0);
}

function medianC(list) {

  const listBA = list.map((list) => Object.values(list));

  const listTotalOrden = listBA.sort((elementA, elementB) => elementA - elementB);

  const mediumList = parseInt(listTotalOrden.length / 2);

  if(pair(list.length)) {

    const element1 = list[mediumList - 1];
    const element2 = list[mediumList];
    const averageE1E2 = arithmeticAverage([element1, element2]);
    median = averageE1E2;
    return median;

  } else {
  	
    median = list[mediumList];
    return median;
  }
}

if(addListBtn) {
  addListBtn.addEventListener('click', addData);
}
