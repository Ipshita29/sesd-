#!/usr/bin/env node
"use strict";
// const { Command } = require("commander");
// const program = new Command();
// program
//     .command("greet <name>")
//     .action((name) => {
//     console.log(`Hello ${name}`);
// });
// program
//     .command("add <number1> <number2>")
//     .action((number1, number2) => {
//     console.log(`Sum is: ${Number(number1) + Number(number2)}`);
// });
// program
//     .command("subtract <number1> <number2>")
//     .action((number1, number2) => {
//     if (Number(number2) > Number(number1)) {
//         console.log(`Subtraction is: ${Number(number2) - Number(number1)}`);
//     }
//     else {
//         console.log(`Subtraction is: ${Number(number1) - Number(number2)}`);
//     }
// });
// program
//     .command("multiply <number1> <number2>")
//     .action((number1, number2) => {
//     console.log(`Product is: ${Number(number1) * Number(number2)}`);
// });
// program
//     .command("divide <number1> <number2>")
//     .action((number1, number2) => {
//     if (Number(number2) === 0) {
//         console.log("Cannot divide by zero");
//     }
//     else {
//         console.log(`Division is: ${Number(number1) + Number(number2)}`);
//     }
// });
// program.parse();

//convert the same to OOPs

const { Command } = require("commander");
const axios = require("axios");
const chalk = require("chalk");

class MyCLI {

    constructor() {
        this.program = new Command();

        this.program
            .name("mycli")
            .description("Custom CLI tool built using Node + TypeScript concepts")
            .version("1.0.0");

        this.registerCommands();
    }

    registerCommands() {


        this.program
            .command("greet <name>")
            .description("Greets a user")
            .action((name) => {
                console.log(chalk.green(`Hello ${name}`));
            });

        this.program
            .command("add <number1> <number2>")
            .description("Add two numbers")
            .action((number1, number2) => {
                console.log(`Sum is: ${Number(number1) + Number(number2)}`);
            });

        this.program
            .command("subtract <number1> <number2>")
            .description("Subtract numbers")
            .action((number1, number2) => {
                if (Number(number2) > Number(number1)) {
                    console.log(`Subtraction is: ${Number(number2) - Number(number1)}`);
                }
                else {
                    console.log(`Subtraction is: ${Number(number1) - Number(number2)}`);
                }
            });

        this.program
            .command("multiply <number1> <number2>")
            .description("Multiply numbers")
            .action((number1, number2) => {
                console.log(`Product is: ${Number(number1) * Number(number2)}`);
            });

        this.program
            .command("divide <number1> <number2>")
            .description("Divide numbers")
            .action((number1, number2) => {
                if (Number(number2) === 0) {
                    console.log("Cannot divide by zero");
                }
                else {
                    console.log(`Division is: ${Number(number1) / Number(number2)}`);
                }
            });
    }

    run() {
        this.program.parse();
    }
}

const cli = new MyCLI();
cli.run();