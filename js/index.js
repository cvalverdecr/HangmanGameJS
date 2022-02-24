"use strict";

let today = new Date();
let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
console.log(date);

function GetComputerName() {
    try {
        var network = new ActiveXObject("WScript.Network");
        // Show a pop up if it works
        alert(network.computerName);
    } catch (e) {}
}
let computerName = "";
computerName = GetComputerName();
console.log(computerName);