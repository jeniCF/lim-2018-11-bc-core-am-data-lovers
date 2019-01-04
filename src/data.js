/* esta es una función de ejemplo
puedes ver como agregamos la función a nuestro objeto global window

 const example = (arr) => {
       const arrKeys = Object.keys(data)
   for(let i = 0; i < arrKeys.length; i++){
console.log(arrKeys[i])
     console.log(data[arrKeys[i]])
}
return example;
};

window.example = example; */

const checkbox = Object.values(document.getElementsByClassName('checkbox'));
console.log(checkbox);

let selectedTags= [];

checkbox.forEach((tag) =>{
  tag.addEventListener ('change', () => {
    if (event.target.checked) {
      selectedTags.push(tag.value);
    
    }
    else {
      x= selectedTags.indexOf(tag.value)
      selectedTags.splice(x,1)
      functionChampions(arrKeys);
    }
  })
})


const dataCopy = Object.assign({},LOL.data) 
const arrayCopy = Object.values(dataCopy);


const dataFilter = (data, condition) => {
 return data.filter ((eleTags) => {
  return eleTags.tags.includes(condition) === true;
 });
};

dataFilter(arrayCopy, 'Mage').forEach((ele)=>{
  console.log('result = '+ ele.id);
});