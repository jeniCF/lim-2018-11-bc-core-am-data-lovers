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
let functionMaxMin = (ele, select, index, stats) => {  
  if (stats === 1) {
    let hpCalc = ele[index].stats.hp + select * ele[index].stats.hpperlevel;  
    return hpCalc.toFixed(2);
  }

  if (stats === 2) {
    let mpCalc = ele[index].stats.mp + select * ele[index].stats.mpperlevel;  
    return mpCalc.toFixed(2);
  }

  if (stats === 3) {
    let armorCalc = ele[index].stats.armor + select * ele[index].stats.armorperlevel;  
    return armorCalc.toFixed(2);
  } 

  if (stats === 4) {
    let attackDaCalc = ele[index].stats.attackdamage + select * ele[index].stats.attackdamageperlevel;  
    return attackDaCalc.toFixed(2);
  } 
};

window.lol = {
  filterChampions,
  sortFunction,
  functionMaxMin,
};

