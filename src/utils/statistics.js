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

if(addListBtn) {
  addListBtn.addEventListener('click', addData);
}
