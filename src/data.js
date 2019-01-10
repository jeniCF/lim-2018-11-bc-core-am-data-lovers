

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


const funcionorden = (data, select) => {
  let arrayData = [];

  data.forEach((elementoiterado) => {
    arrayData.push(elementoiterado);
    arrayData.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    if (select.selected === true) {
      return arrayData;
    } else {
      return arrayData.reverse();
    }
  });
  return arrayData;
};

window.lol = {
  filterChampions,
  funcionorden,
};
