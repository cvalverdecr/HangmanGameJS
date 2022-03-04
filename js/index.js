"use strict";
window.onload = function(e) {
    let today = new Date();
    let date =
        today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    console.log(date);

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