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

    function startGame() {}
};