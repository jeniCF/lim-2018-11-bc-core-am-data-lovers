const mostrarArray = (data)=>{
  let arrayMostrado = [];
  for(let i = 0; i < data.length ; i++){
    arrayMostrado.push({name: data[i].name, img: data[i].img, defense: data[i].info.defense, magic: data[i].info.magic, difficulty: data[i].info.difficulty});
  }
  return arrayMostrado;
}

const buscarNombre = (data, nombre) => {
  let x = [];
    for(let i = 0 ; i < data.length ; i++){
      if(data[i].name === nombre){
        x.push({img: data[i].img, name: data[i].name, defense: data[i].info.defense, magic: data[i].info.magic, difficulty: data[i].info.difficulty});
      }
    }
    return x;
  }





window.lol = {
  mostrarArray,
  buscarNombre,
};