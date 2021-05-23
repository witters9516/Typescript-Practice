import { Battler } from './Battler.js';
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const output = document.getElementById("sum");
output.textContent = "Hiiiiiiiiiiiiiii, bitch?";
function add(num1, num2) {
    let bob = new Battler("Bob", 10, 1);
    let terry = new Battler("Terry", 20, 2);
    let avain = new Battler("Avain", 45, 5);
    console.log(bob.toString());
    console.log(terry.toString());
    console.log(avain.toString());
    return num1 + num2;
}
button?.addEventListener("click", function () {
    var sum = add(+input1.value, +input2.value).toString();
    console.log("Output: " + sum);
    output.textContent = sum;
});
