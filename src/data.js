

let filterChampions = ((data, arrValuesCheck) => {
  console.log(arrValuesCheck);

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

window.lol = {
  filterChampions,
  sortFunction,
};
