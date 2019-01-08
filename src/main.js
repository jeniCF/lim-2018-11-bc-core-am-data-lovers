let containerCards = document.getElementById('container-cards');
let cardName = document.getElementById('card-name');
let inputSearch = document.getElementById('input-search');
const arrKeys = Object.values(LOL.data);
const emptyArray = [];


let functionChampions = (championsData) => {
 // let championsName = Object.keys(datas);
 // let championsData = Object.values(datas);
 let championsCard = '';
/* EL DIV DE LA IMAGEN GRANDE
<div id="champions-modal" class="champions-modal">
 <img class="modal-image" src="${data.splash}" />
 </div>
*/
 championsData.forEach((data) => { // href="#champions-modal"
   const list = `
 <div class ="card-button">  
 <img class="image" src="${data.img}"/>
 <list class="etiqueta">${data.name}</list> 
 <list class="etiqueta">Defensa ${data.info.defense}</list>
 <list class="etiqueta">Magia ${data.info.magic}</list>
 <list class="etiqueta">Dificultad ${data.info.difficulty}</list>
 </div> 
`;
   championsCard += list;
   
 });
 containerCards.innerHTML = championsCard;
};

functionChampions(arrKeys);

const mostrarNombre = () => {
  let championsCard = '';
  let prueba2 = lol.buscarNombre(arrKeys, inputSearch.value);
  alert("hola");
   for (let i = 0; i<prueba2.length;i++){    
    let list = `
    <div class ="card-name">  
    <img class="image" src="${prueba2[i].img}"/>
    <list class="etiqueta">${prueba2[i].name}</list> 
    <list class="etiqueta">Defensa ${prueba2[i].defense}</list>
    <list class="etiqueta">Magia ${prueba2[i].magic}</list>
    <list class="etiqueta">Dificultad ${prueba2[i].difficulty}</list>
    </div> 
   `;
   championsCard += list;
    }

   containerCards.innerHTML = championsCard;
}

