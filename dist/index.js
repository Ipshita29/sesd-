#!/usr/bin/env node
"use strict";
const { Command } = require("commander");
const program = new Command();
program
    .command("greet <name>")
    .action((name) => {
    console.log(`Hello ${name}`);
});
program
    .command("add <number1> <number2>")
    .action((number1, number2) => {
    console.log(`Sum is: ${Number(number1) + Number(number2)}`);
});
program
    .command("subtract <number1> <number2>")
    .action((number1, number2) => {
    if (Number(number2) > Number(number1)) {
        console.log(`Subtraction is: ${Number(number2) - Number(number1)}`);
    }
    else {
        console.log(`Subtraction is: ${Number(number1) - Number(number2)}`);
    }
});
program
    .command("multiply <number1> <number2>")
    .action((number1, number2) => {
    console.log(`Product is: ${Number(number1) * Number(number2)}`);
});
program
    .command("divide <number1> <number2>")
    .action((number1, number2) => {
    if (Number(number2) === 0) {
        console.log("Cannot divide by zero");
    }
    else {
        console.log(`Division is: ${Number(number1) + Number(number2)}`);
    }
});
program.parse();
