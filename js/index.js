"use strict";
window.onload = init;

function init(e) {
    let today = new Date();
    let username = document.getElementById("usernameText");
    let word = document.getElementById("word");
    let score = 0;
    let lives = 0;
    let btnNewGame = document.getElementById("btnNewGame");
    btnNewGame.onclick = newGame;

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
                //startGame();
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
            word.innerHTML = palabras[random].Palabra;
            random = 0;
        }

        // const btnGetUsername = document.getElementById("btnGetUsername");
        // debugger;
        // btnGetUsername.addEventListener("onclick", function() {
        //     username = document.getElementById("usernameText").value;
        //     if (username != null) {
        //         username = document.getElementById("usernameText").value;
        //         console.log(username);
        //         startGame();
        //         document.getElementById("word").innerHTML = palabras[random].Palabra;
        //     } else {
        //         alert("You must type an Username to continue....");
        //     }
        //     //document.getElementById("divusername").style.display = "none";
        // });
    }

    function newGame() {
        if (username.value.length == "0") {
            alert("You must type an Username to continue....");
        } else {
            //username = document.getElementById("usernameText").value;
            console.log(`El usuario registrado es: ${username.value}`);
            startGame();
            username.value = "";
        }
    }
}