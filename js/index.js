"use strict";
window.onload = function(e) {
    let today = new Date();
    let username = "";
    let word = "";
    let score = 0;
    let lives = 0;

    let date =
        today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    // document.getElementById("divGame").style.display = "none";
    document.getElementById("date").innerHTML = `Server Date: ${date}`;
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
                //console.dir(palabras);
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
            //document.getElementById("word").innerHTML = palabras[random].Palabra;
            random = 0;
        }

        const btnGetUsername = document.getElementById("btnGetUsername");

        btnGetUsername.addEventListener("click", function(e) {
            username = document.getElementById("usernameText").value;
            if (username != null) {
                username = document.getElementById("usernameText").value;
                console.log(username);
                document.getElementById("word").innerHTML = palabras[random].Palabra;
            } else {
                alert("You must type an Username to continue....");
            }
            //document.getElementById("divusername").style.display = "none";
        });
    }
};