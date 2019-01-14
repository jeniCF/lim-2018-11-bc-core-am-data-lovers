
/* Funcion filtrado
 */
let filterChampions = ((data, arrValuesCheck) => {
  const functionFilter = data.filter(arrElement => {
    let booleanArray = [];
    arrValuesCheck.forEach(value => {
      if (arrElement.tags.includes(value)) {
        booleanArray.push(true);
      } else {
        booleanArray.push(false);
      }
    });
    if (booleanArray.includes(false)) {
      return false;
    } else {
      return arrElement;
    }
  });
  return functionFilter;
});

/* Funcion ordenado
 */
const sortFunction = (data, select) => {
  let arrayData = [];
  

  data.forEach((ele) => {
    arrayData.push(ele);
    arrayData.sort((valor1, valor2) => {
      if (valor1.name > valor2.name) {
        return 1;
      }
      if (valor1.name < valor2.name) {
        return -1;
      }
      return 0;
    });

    if (select === true) {
      return arrayData;
    } else {
      return arrayData.reverse();
    }
  });
  return arrayData;
};

/* Funcion cálculo stats
 */
let functionMaxMin = (ele, select, index) => {  
 case 1
  let hpCalc = ele[index].stats.hp + select * ele[index].stats.hpperlevel;  
  return hpCalc;
};

window.lol = {
  filterChampions,
  sortFunction,
  functionMaxMin,
};
