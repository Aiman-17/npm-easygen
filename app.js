#! usr/bin/env node
import inquirer from "inquirer";
const randomNum = Math.floor(Math.random() * 7 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNum",
        type: "number",
        message: "please guess a random number from 1-7;",
    }
]);
if (answer.randomNum === randomNum) {
    console.log("Congratulations! You won");
}
else {
    console.log("You lose🩻");
}
