
let functionFilter = ((arr, choice) => {
  arr.filter(data => {
    const trueAndFalseArray = [];
    choice.forEach(value => {
      if (data.tags.includes(value)) {
        trueAndFalseArray.push(true);
      } else {
        trueAndFalseArray.push(false);
      }
    });
    if (trueAndFalseArray.includes(false)) {
      return false;
    } else {
      return data;
    }
  });
});


/* 
const dataCopy = Object.assign({}, LOL.data);
const arrayCopy = Object.values(dataCopy);


const dataFilter = (data, condition) => {
  return data.filter((eleTags) => {
    return eleTags.tags.includes(condition) === true;
  });
};
dataFilter(arrayCopy, 'Mage').forEach((ele) => {
  console.log('result = ' + ele.id);
}); */

window.lol = {
  functionFilter,
};