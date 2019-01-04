let containerCards = document.getElementById('champions-cards-group');
let containerModalsCards = document.getElementById('champions-modal');


const arrKeys = Object.values(LOL.data);


let functionChampions = (championsData) => {
  // let championsName = Object.keys(datas);  
  // let championsData = Object.values(datas);
  let championsCard = [];
  let championsModal = [];

  championsData.forEach((data) => {
    championsCard.push(`
  <a class ='champion-card' href='#champions-modal'>
  <input type='image' src='${data.img}'/>
  <h1>${data.name}</h1> 
  </a> `);

    championsModal.push(`
    <img class='modal-splash' src='${data.splash}' id='${data.id}' />
  `);

    containerCards.innerHTML = championsCard;
    containerModalsCards.innerHTML = championsModal;
  });
  return championsCard, championsModal;
};
functionChampions(arrKeys);

containerCards.addEventListener('click', myFunction);

function myFunction() {
  containerModalsCards.style.display = 'block';
}

/* 
  <h3> ${data.title}</h3>

<h3>Ataque ${data.info.attack}</h3>
<h3>Defensa ${data.info.defense}</h3>
<h3>Magia ${data.info.magic}</h3>
<h3>Dificultad ${data.info.difficulty}</h3>*/
