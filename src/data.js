<<<<<<< HEAD
const originalArrKeysData = Object.assign({}, LOL);
const arrKeysData = Object.values(originalArrKeysData);

/* global functionChampions : true */


const checkbox = Object.values(document.getElementsByClassName('checkbox'));

let selectedTags = [];

let functionFilter = (() => {
  checkbox.forEach((tag) => {
    tag.addEventListener('change', () => {
      if (event.target.checked) {
        selectedTags.push(tag.value);
      } else {
        let io = selectedTags.indexOf(tag.value);
        selectedTags.splice(io, 1);
        functionChampions(arrKeysData);
      }

      const arrKeysFilter = arrKeysData.filter(data => {
        const trueAndFalseArray = [];
        selectedTags.forEach(choice => {
          if (data.tags.includes(choice)) {
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
      functionChampions(arrKeysFilter);
    });
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
=======


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
>>>>>>> 23a7cc48f1b51f3068628c21b0440d2f99d9a09a
