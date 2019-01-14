let championPage = document.getElementById('champions-page');
championPage.style.display = 'none';

let homePage = document.getElementById('home-page');
let homePageButton = document.getElementById('home-page-button');
let championPageButton = document.getElementById('champion-page-button');

championPageButton.addEventListener('click', function() {
  event.preventDefault();
  championPage.style.display = 'block';
  homePage.style.display = 'none';
  document.body.style.backgroundImage = "url('https://cdn.vox-cdn.com/uploads/chorus_image/image/59370373/Institute_of_War.0.jpg')";
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


let functionChampions = (championsData) => {
  let championsCard = '';
  let championsModal = '';

  // console.log('hola =' + championsData);
  
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
    <h1 class='champion-name-modal'>${data.name}</h1> 
    <h3 class='champion-title-modal'> ${data.title.toUpperCase()}</h3>
    <p class='attack'> Ataque</p> <progress value='${data.info.attack}'max='10'></progress>
    <p class='defense'>Defensa </p> <progress value='${data.info.defense}'max='10'></progress>
    <p class='magic'>Magia </p> <progress value='${data.info.magic}'max='10'></progress>
    <p class='difficulty'>Dificultad </p> <progress value='${data.info.difficulty}'max='10'></progress>
    <p> Vida  ${data.stats.hp}</p> 
    <p>Nivel:</p>
    <form>
        <select> 
            <option value='1' selected>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>      
            <option value='14'>14</option>
            <option value='15'>15</option>
            <option value='16'>16</option>
            <option value='17'>17</option>      
            <option value='18'>18</option>
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


orderLol.addEventListener('change', () => {
  functionChampions(window.lol.sortFunction(arrKeys, ascendant.selected));
});
 

/* const minMax = document.getElementById('min-max');


let hpselect = document.getElementById('hp-select');
console.log(hpselect.value);

functionMaxMin = (data,select) =>{  
  let minMaxvar = '';
select.addEventListener('change', () =>{
  let maxreal= select.value;
  console.log(maxreal);

  data.forEach((ele) => {
  let max = ele.stats.hp + maxreal*ele.stats.hpperlevel;
  let hpList = `
  <p>
  <span> Salud de ${ele.name}: ${ele.stats.hp}(min) - ${max} </span>
</p>
  `;
  minMaxvar += hpList;
  minMax.innerHTML = minMaxvar;
  });
  return minMaxvar
});
};
functionMaxMin(arrKeys, hpselect); */
    