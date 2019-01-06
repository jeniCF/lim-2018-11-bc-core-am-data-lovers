

const originalArrKeysData = Object.assign({}, window.LOL);
const arrKeysData = Object.values(originalArrKeysData.data);

const checkbox = Object.values(document.getElementsByClassName('checkbox'));

let selectedTags = [];

let functionFilter = ((ele)=> {
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