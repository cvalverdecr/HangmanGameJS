"use strict";
window.onload = function(e) {
    let today = new Date();
    let date =
        today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    console.log(date);

<<<<<<< HEAD
let palabrasjson = '{
"1": {
    "Palabra": "Gato",
    "Pista": "Animal que doméstico que no es el perro"
},
"2": {
    "Palabra": "Vaca",
    "Pista": "Usa campana pero no es iglesia"
},
"3": {
    "Palabra": "Perú",
    "Pista": "Ubicación de La llama que llama"
},
"4": {
    "Palabra": "Casa",
    "Pista": "Donde quería ir ET!"
},
"5": {
    "Palabra": "Juan",
    "Pista": "Nombre de Apostol"
},
"6": {
    "Palabra": "Apodo",
    "Pista": "Todo Alajuelense ha puesto un ..."
},
"7": {
    "Palabra": "Añejo",
    "Pista": "No está fresco.... Está?"
},
"8": {
    "Palabra": "Picar",
    "Pista": "Lo favorito de los zancudos"
},
"9": {
    "Palabra": "Queja",
    "Pista": "Se pone cuando hay resentimiento o disgusto"
},
"10": {
    "Palabra": "Nieto",
    "Pista": "Tercer nivel en el árbol genealógico"
},
"11": {
    "Palabra": "Jugaba",
    "Pista": "Yo de niño ... a la pelota"
},
"12": {
    "Palabra": "Ingles",
    "Pista": "Nacionalidad de Elton John"
},
"13": {
    "Palabra": "Sobrio",
    "Pista": "Lo que nadie estaba en Palmares...."
},
"14": {
    "Palabra": "Chisme",
    "Pista": "Lo que le gustaba a las Fisgonas de Paso Ancho"
},
"15": {
    "Palabra": "Cáncer",
    "Pista": "Signo Zodiacal del Cangrejo"
},
"16": {
    "Palabra": "Espacial",
    "Pista": "Tambien conocido como cósmico"
},
"17": {
    "Palabra": "Taberna",
    "Pista": "Sinónimo de Cantina"
},
"18": {
    "Palabra": "Babeado",
    "Pista": "Babero del bebé"
},
"19": {
    "Palabra": "Honduras",
    "Pista": "País de origen de las baleadas"
},
"20": {
    "Palabra": "Taladro",
    "Pista": "Herramienta que sirve para perforar"
}
}
';


let array = JSON.parse(palabrasjson);
let today = new Date();
let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
console.log(date);
console.log(palabrasjson);
=======
    loadJSON();
    var jsonData = null;
    var palabras = [];

    function loadJSON() {
        fetch("palabras.json")
            .then((response) => response.json())
            .then((data) => {
                jsonData = data;
                //console.log(jsonData);
                for (const key in jsonData) {
                    palabras.push(jsonData[key]);
                }
                console.dir(palabras);
                startGame();
            });
    }

    function startGame() {
        let random = 0;
        let last_random = -1;
        if (random != last_random) {
            random = Math.floor(Math.random() * 19);
            last_random = random;

            console.log(random);
            console.log(palabras[random]);
            random = 0;
        }
    }
};
>>>>>>> main
