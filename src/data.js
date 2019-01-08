

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

window.lol = {
  filterChampions,
};
