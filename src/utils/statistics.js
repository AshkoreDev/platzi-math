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

if(addListBtn) {
  addListBtn.addEventListener('click', addData);
}
