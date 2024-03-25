#! /usr/bin/env node 
import inquirer from "inquirer";
// 1. computer will generate a number;
// 2. taking input from user; 
// 3. checkin Conditionn ;
const computer_generated_number:number = Math.floor(Math.random() * 6 +1 );

const input = await inquirer.prompt([
    {
        name: "Guessed_Number",
        type: "number",
        message: "Guess a number between 1-6",
    }

])

if(input.Guessed_Number == computer_generated_number)
{
    console.log("kudos! you guessed the number correctly");
}
else{
    console.log("Sorry! try again, incorrect guessed.");
}