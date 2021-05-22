"use strict";
exports.__esModule = true;
var Battler_1 = require("./Battler");
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var output = document.getElementById("sum");
output.textContent = "Hiiiiiiiiiiiiiii, bitch?";
function add(num1, num2) {
    var bob = new Battler_1.Battler("Bob", 10, 1);
    var terry = new Battler_1.Battler("Terry", 20, 2);
    var avain = new Battler_1.Battler("Avain", 45, 5);
    console.log(bob.toString());
    console.log(terry.toString());
    console.log(avain.toString());
    return num1 + num2;
}
button.addEventListener("click", function () {
    var sum = add(+input1.value, +input2.value).toString();
    console.log("Output: " + sum);
    output.textContent = sum;
});
