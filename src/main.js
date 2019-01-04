
let containerCards = document.getElementById('champions-cards-group');
let containerModalsCards = document.getElementById('champions-modal');
let modal = document.getElementById('champions-modal');


const arrKeys = Object.values(LOL.data);

let functionChampions = (championsData) => {
  // let championsName = Object.keys(datas);  
  // let championsData = Object.values(datas);
  let championsCard = '';
  let championsModal = '';

  championsData.forEach((data, index) => {
    const list = `
  <a class ='champion-card' href='#champions-modal'>
  <input type='image' src='${data.img}'/>
  <h1>${data.name}</h1> 
  </a> `;
    
    const modal = `
    <img class='modal-image' id= '${index}' src='${data.splash}' />
  `;

    championsCard += list;
    championsModal += modal;

    containerCards.innerHTML = championsCard;
    containerModalsCards.innerHTML = championsModal;
  });

  return championsCard, championsModal;
};

functionChampions(arrKeys);

// document.getElementById('button-card').addEventListener('click', function(){


window.LOL = {
  functionChampions,
} 

let imgModal= document.getElementById('modal-image')

/* 
  <h3> ${data.title}</h3>

<h3>Ataque ${data.info.attack}</h3>
<h3>Defensa ${data.info.defense}</h3>
<h3>Magia ${data.info.magic}</h3>
<h3>Dificultad ${data.info.difficulty}</h3>*/
    
const filterType = (data, type) => {
  const newData = data.forEach(copyData => 
    Object.assign({},
  { name: copyData.name, tags: copyData.tags, img: copyData.img }));
  const filterTank = newData.filter((data) => {
    return data.tags.includes(type) === true;
  });
  return filterTank;
};

filterType(LOL.data, 'Tank');
