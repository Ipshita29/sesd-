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
            this.program
            .command("square <num>")
            .description("Square of a number")
            .action((num) => {
                console.log(`Square is: ${Number(num) * Number(num)}`);
            });

        this.program
            .command("reverse <text>")
            .description("Reverse a string")
            .action((text) => {
                console.log(text.split("").reverse().join(""));
            });

        this.program
            .command("time")
            .description("Show current time")
            .action(() => {
                console.log(new Date().toLocaleTimeString());
            });

        this.program
            .command("date")
            .description("Show today's date")
            .action(() => {
                console.log(new Date().toLocaleDateString());
            });

        this.program
            .command("random")
            .description("Generate random number")
            .action(() => {
                console.log(Math.floor(Math.random() * 100));
            });


        // Quote API
        this.program
            .command("quote")
            .description("Get random quote")
            .action(async () => {
                try {
                const res = await axios.get("https://zenquotes.io/api/random");

                console.log(chalk.blue(`"${res.data[0].q}"`));
                console.log(`— ${res.data[0].a}`);
                } catch (error) {
                console.log("Error fetching quote. Check your internet.");
                }
            });

        // GitHub API
        this.program
            .command("github <username>")
            .description("Get GitHub user info")
            .action(async (username) => {
                try {
                    const res = await axios.get(`https://api.github.com/users/${username}`);

                    console.log(chalk.yellow(`User: ${res.data.login}`));
                    console.log(`Repos: ${res.data.public_repos}`);
                    console.log(`Followers: ${res.data.followers}`);
                } catch (error) {
                    console.log("User not found");
                }
            });

        // Joke API
        this.program
            .command("joke")
            .description("Get a random joke")
            .action(async () => {
                try {
                const res = await axios.get("https://official-joke-api.appspot.com/random_joke");

                console.log(chalk.yellow(res.data.setup));
                console.log(chalk.green(res.data.punchline));

                } catch (error) {
                console.log("Error fetching joke");
                }
            });
    }

    run() {
        this.program.parse();
    }
}

const cli = new MyCLI();
cli.run();