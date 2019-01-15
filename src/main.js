let championPage = document.getElementById('champions-page');
championPage.style.display = 'none';

let homePage = document.getElementById('home-page');
let homePageButton = document.getElementById('home-page-button');
let championPageButton = document.getElementById('champion-page-button');

championPageButton.addEventListener('click', function() {
  event.preventDefault();
  championPage.style.display = 'block';
  homePage.style.display = 'none';
  document.body.style.backgroundImage = 'url("https://cdn.vox-cdn.com/uploads/chorus_image/image/59370373/Institute_of_War.0.jpg")';
});

homePageButton.addEventListener('click', function() {
  event.preventDefault();
  homePage.style.display = 'block';
  championPage.style.display = 'none';
  document.body.style.background = '#000A0A';
});

let containerCards = document.getElementById('champions-cards-group');
let containerModalsCards = document.getElementById('champions-modal-container');

const originalArrKeys = Object.assign({}, window.LOL);
const arrKeys = Object.values(originalArrKeys.data);
const checkboxArray = Object.values(document.getElementsByClassName('checkbox'));

let orderLol = document.getElementById('order-data');
let ascendant = document.getElementById('ascendant');

/* Funcion de pintado de mi data (Templates)
 */
let functionChampions = (championsData) => {
  let championsCard = '';
  let championsModal = '';

  championsData.forEach((data) => {
    const listChampionCard = `
  <a class ='champion-card' href='#champions-modal'>
  <input type='image' class= 'card-image' src='${data.img}'/>
  <h1 class='champion-name-card'>${data.name}</h1> 
  </a>`;

    const listChampionModal = `
  <div class = 'champion-modal'>
  <span class='close'>&times;</span>
    <img class='modal-splash' src='${data.splash}'/>
    <section class = 'champion-info'>
    
    <div class= 'name-title'>
    <h1 class='champion-name-modal'>${data.name}</h1> 
    <h3 class='champion-title-modal'> ${data.title.toUpperCase()}</h3>
    </div>
    <div class= 'info'>
    <p class='attack'> Ataque</p> <progress class= 'progress-atck' value='${data.info.attack}'max='10'></progress>
    <p class='defense'>Defensa </p> <progress class= 'progress-def' value='${data.info.defense}'max='10'></progress>
    <p class='magic'>Magia </p> <progress class= 'progress-mag' value='${data.info.magic}'max='10'></progress>
    <p class='difficulty'>Dificultad </p> <progress class= 'progress-diff' value='${data.info.difficulty}'max='10'></progress>
    </div>
    
    <div class = 'hp-stats'>
    <p class= 'hp-number'> Salud: ${data.stats.hp.toFixed(2)}</p>
    <p class= 'mp-number'> Penetración mágica: ${data.stats.mp.toFixed(2)} </p>
    <p class= 'armor-number'> Armadura: ${data.stats.armor.toFixed(2)}</p>
    <p class= 'attackdamage-number'> Daño de ataque: ${data.stats.attackdamage.toFixed(2)}</p>

    </div>
    <div class= 'select-hp-stats'>
    <form>
        <select class= 'hp-select'> 
            <option value='1' selected> Nivel 1</option>
            <option value='2'> Nivel 2</option>
            <option value='3'>Nivel 3</option>
            <option value='4'>Nivel 4</option>
            <option value='5'>Nivel 5</option>
            <option value='6'>Nivel 6</option>
            <option value='7'>Nivel 7</option>
            <option value='8'>Nivel 8</option>
            <option value='9'>Nivel 9</option>
            <option value='10'>Nivel 10</option>
            <option value='11'>Nivel 11</option>
            <option value='12'>Nivel 12</option>
            <option value='13'>Nivel 13</option>      
            <option value='14'>Nivel 14</option>
            <option value='15'>Nivel 15</option>
            <option value='16'>Nivel 16</option>
            <option value='17'>Nivel 17</option>      
            <option value='18'>Nivel 18</option>
          </select>
        
     </form>
    </section>    
    </div>`;

    championsCard += listChampionCard;
    championsModal += listChampionModal;

    containerCards.innerHTML = championsCard;
    containerModalsCards.innerHTML = championsModal;

    let collectionModal = document.querySelectorAll('.champion-modal');
    let arrModal = Array.from(collectionModal);

    let collectionCard = document.querySelectorAll('.champion-card');

    let arrCard = Array.from(collectionCard);

    let closeSpan = document.getElementsByClassName('close');
    let close = Array.from(closeSpan);

    arrCard.forEach((modal, index) => {
      modal.addEventListener('click', function() {
        arrModal[index].style.display = 'block';
      });
    });

    close.forEach((close, index) => {
      close.addEventListener('click', function() {
        arrModal[index].style.display = 'none';
      });
    });
  });
  return championsCard;
};
functionChampions(arrKeys);


/* Funcion filtrado 
 */

const functionCheckbox = ((check) => {
  let checkvalues = [];

  check.forEach((tag) => {
    tag.addEventListener('change', () => {
      if (event.target.checked === true) {
        checkvalues.push(tag.value);
      } else {
        let ck = checkvalues.indexOf(tag.value);
        checkvalues.splice(ck, 1);
        functionChampions(arrKeys);
      }
      functionChampions(window.lol.filterChampions(arrKeys, checkvalues));
    });
  });
});
functionCheckbox(checkboxArray);

/* Funcion ordenado */

orderLol.addEventListener('change', () => {
  functionChampions(window.lol.sortFunction(arrKeys, ascendant.selected));
});


/* Funcion aritmética */

let hpSelect = Array.from(Object.values(document.getElementsByClassName('hp-select')));
let hpContainer = Array.from(Object.values(document.getElementsByClassName('hp-number')));
let mpContainer = Array.from(Object.values(document.getElementsByClassName('mp-number')));
let armorContainer = Array.from(Object.values(document.getElementsByClassName('armor-number')));
let attackDamageContainer = Array.from(Object.values(document.getElementsByClassName('attackdamage-number')));

hpSelect.forEach((ele, index) => {
  ele.addEventListener('change', () => {
    hpContainer[index].innerHTML = 'Salud: ' + window.lol.functionMaxMin(arrKeys, ele.value, index, 1);
    mpContainer[index].innerHTML = 'Penetración mágica: ' + window.lol.functionMaxMin(arrKeys, ele.value, index, 2);
    armorContainer[index].innerHTML = 'Armadura: ' + window.lol.functionMaxMin(arrKeys, ele.value, index, 3);
    attackDamageContainer[index].innerHTML = 'Daño de Ataque: ' + window.lol.functionMaxMin(arrKeys, ele.value, index, 4);
  });
});