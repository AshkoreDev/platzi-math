import { arithmeticAverage, pair } from './statistics.js';

const salariesTotal = [];

function addData() {

  if(salaryName.value != "" && (salary.value != "" || salary >= 0)) {

    salariesTotal.push({
    name: salaryName.value,
    salary: parseInt(salary.value)
    });

    document.getElementById("salaryName").value = "";
    document.getElementById("salary").value = "";

    return salaryResult.innerText = `Datos agregados.`;
  } else {
    return salaryResult.innerText = `ERROR: Debe ingresar los datos necesarios.`;
  }
}
