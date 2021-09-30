const inputName = document.querySelector('input[type="text"]');
const form = document.querySelector("form");
let numero = "";
let LisMOV = [01, 02 , 03, 21, 31, 32, 33, 40, 41, 42, 43, 50,
              51, 52, 53, 60, 61, 62, 63, 70, 71, 73, 80, 81, 
              82, 83, 90, 91, 92, 93];

let LisMTN = [04, 05 , 06, 34, 35, 36, 44, 45, 46, 55,
              56, 64, 65, 66, 74, 75, 76, 84, 
              85, 86, 94, 95, 96];

let LisORANGE = [07, 08 , 09, 37, 38, 38, 47, 48, 49, 57,
              58, 59, 67, 68, 69, 77, 78, 79, 87, 
              88, 89, 97, 98, 99];

inputName.addEventListener("input", (e) => {
    numero = e.target.value;
    
});

/// Valeur consevertir en nombre de carractère

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nbreNumero = numero.length;

  if(nbreNumero===8){
    let rcupNumer0 = numero[0] + numero[1];

    // || LisMTN[22] || LisORANGE[23]
    for( let i=0; i <= 29; i++){
      if(rcupNumer0 == LisMOV[i]){
          document.querySelector("form > div.resulat").innerHTML = `
         <h4> Votre Numero à dix Chiffres est : <span style="background-color: blue;">01${numero}</span></h4> `;
      }
      if(rcupNumer0 == LisMTN[i]){
        document.querySelector("form > div.resulat").innerHTML = `
       <h4> Votre Numero à dix Chiffres est : <span style="background-color: yellow; color:black;">05${numero}</span></h4> `;
    }
    if(rcupNumer0 == LisORANGE[i]){
      document.querySelector("form > div.resulat").innerHTML = `
     <h4> Votre Numero à dix Chiffres est : <span style="background-color: orange;">07${numero}</span></h4> `;
    }
    }

  }else{

  document.querySelector("form > div.resulat").innerHTML = `
  <h4 style="color:red;">
      Attention! votre numero contient que ${nbreNumero} <br> qui est:${numero} 
  </h4>
  <p style="color:green;"> Vous devez saisir 8 chiffre svp! </p>`;
  }
//   document.querySelector("form > div.resulat").innerHTML = `
//   <h4> Votre Numero à dix Chiffres est : ${numero}</h4> `;
});