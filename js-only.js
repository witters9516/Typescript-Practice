"use strict";
exports.__esModule = true;
var Battler_js_1 = require("./Battler.js");
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var output = document.getElementById("sum");
output.textContent = "Hiiiiiiiiiiiiiii, bitch?";
function add(num1, num2) {
    var bob = new Battler_js_1.Battler("Bob", 10, 1);
    var terry = new Battler_js_1.Battler("Terry", 20, 2);
    var avain = new Battler_js_1.Battler("Avain", 45, 5);
    console.log(bob.toString());
    console.log(terry.toString());
    console.log(avain.toString());
    console.log(terry.getHP() - bob.getHP());
    return num1 + num2;
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    var sum = add(+input1.value, +input2.value).toString();
    console.log("Output: " + sum);
    output.textContent = sum;
});
