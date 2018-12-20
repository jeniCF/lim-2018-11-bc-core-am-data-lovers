
let containerCards = document.getElementById('lista-de-los-campeones');

const arrKeys = Object.values(LOL.data);

let functionChampions = (championsData) => {
  // let championsName = Object.keys(datas);  
  // let championsData = Object.values(datas);
  let championsCard = '';

  championsData.forEach((data) => {
    const list = `
  <a class ="card-button" href="#champions-modal">
  <input type="image" src="${data.img}"/>
  <h1>${data.name}</h1>
  <h3> ${data.title}</h3>
  <h3>Ataque ${data.info.attack}</h3>
  <h3>Defensa ${data.info.defense}</h3>
  <h3>Magia ${data.info.magic}</h3>
  <h3>Dificultad ${data.info.difficulty}</h3>
  </a> 
<div id="champions-modal" class="champions-modal">
  <img class="modal-image" src="${data.splash}" />
</div>
`;
    championsCard += list;
    containerCards.innerHTML = championsCard;
  });

  return championsCard;
};

functionChampions(arrKeys);

// document.getElementById("button-card").addEventListener("click", function(){


window.LOL = {
  functionChampions,
} 