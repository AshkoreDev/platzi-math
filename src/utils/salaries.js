import { arithmeticAverage, pair } from './statistics.js';

const salaryName = document.getElementById('salaryName');
const salary = document.getElementById('salary');
const addSalaryBtn = document.getElementById('addSalaryBtn');
const salaryBtn = document.getElementById('salaryBtn');
const salaryResult = document.getElementById('salaryResult');

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

// Salary median
function calculateSalary() {
  // General Median

  const salariesTotalMap = salariesTotal.map((person) => person.salary);

  const salariesTotalOrden = salariesTotalMap.sort((salaryA, salaryB) => salaryA - salaryB);

  // Top 10%
  const spliceStart = parseInt(salariesTotalOrden.length * (90 / 100));
  const salaryTop10 = salariesTotalOrden.slice(spliceStart, salariesTotalOrden.length);
  const top = parseInt(salaryTop10.length / 2);

  const middle = parseInt(salariesTotalOrden.length / 2);

  if(middle == 0 || middle == "") {

    return salaryResult.innerText = `ERROR: Debe ingresar los datos necesarios.`;

  } else {

    if(pair(salariesTotalOrden.length) && pair(salaryTop10.length)) {

      const middlePerson1 = salariesTotalOrden[middle - 1];
      const middlePerson2 = salariesTotalOrden[middle];

      const middleTop1 = salaryTop10[top - 1];
      const middleTop2= salaryTop10[top];

      const top10 = arithmeticAverage([middleTop1, middleTop2]);
      const median = arithmeticAverage([middlePerson1, middlePerson2]);
      return salaryResult.innerText =
      `La mediana salarial es: ${median}.
       El top 10% es: ${top10}.`;

    } else {

      const median = salariesTotalOrden[middle];
      const top10 = salaryTop10[top];
      return salaryResult.innerText =
      `La mediana salarial es: ${median}.
       El top 10% es: ${top10}.`;
    }
  }
}


if(addSalaryBtn || salaryBtn) {

  addSalaryBtn.addEventListener('click', addData);
  salaryBtn.addEventListener('click', calculateSalary);
}