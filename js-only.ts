import { Battler } from './Battler.js';
const button = document.querySelector("button");
const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;
const output = document.getElementById("sum") as HTMLOutputElement;



output.textContent = "Hiiiiiiiiiiiiiii, bitch?"

function add(num1: number, num2: number)
{   

    let bob:Battler = new Battler("Bob", 10, 1);
    let terry:Battler = new Battler("Terry", 20, 2);
    let avain:Battler = new Battler("Avain", 45, 5);

    console.log(bob.toString());
    console.log(terry.toString());
    console.log(avain.toString());

    return num1 + num2;
}

button?.addEventListener("click", function()
{
    var sum: string = add(+input1.value, +input2.value).toString();
    console.log("Output: " + sum);
    output.textContent = sum;
});