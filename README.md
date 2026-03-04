# sesd
# MyCLI – Custom Command Line Tool

A simple and powerful **Command Line Interface (CLI) tool** built using **Node.js, TypeScript concepts, and the Commander library**.
The CLI provides multiple utility commands for performing quick operations directly from the terminal such as calculations, text manipulation, and fetching information from external APIs.

---

# Features

• Built using **Object-Oriented Programming (OOP)** with classes
• Uses **Commander.js** for CLI command handling
• **10+ custom commands**
• **API integrations** (GitHub, Quotes, Advice, Crypto, etc.)
• **Colored terminal output** using Chalk
• Easy-to-use and extendable CLI structure

---

# Tech Stack

Node.js
TypeScript concepts
Commander.js
Axios (for API calls)
Chalk (for colored CLI output)

---


# Usage

General command format:

```
mycli <command> [arguments]
```

Example:

```
mycli greet Ipshita
```

---

# Available Commands

## Basic Commands

### Greet User

```
mycli greet <name>
```

Example:

```
mycli greet Ipshita
```

Output:

```
Hello Ipshita
```

---

### Add Two Numbers

```
mycli add <number1> <number2>
```

Example:

```
mycli add 5 3
```

Output:

```
Sum is: 8
```

---

### Subtract Numbers

```
mycli subtract <number1> <number2>
```

---

### Multiply Numbers

```
mycli multiply <number1> <number2>
```

---

### Divide Numbers

```
mycli divide <number1> <number2>
```

---

### Square of a Number

```
mycli square <number>
```

---

### Reverse Text

```
mycli reverse <text>
```

Example:

```
mycli reverse hello
```

Output:

```
olleh
```

---

### Show Current Time

```
mycli time
```

---

### Show Current Date

```
mycli date
```

---

### Generate Random Number

```
mycli random
```

---

# API Commands

The CLI integrates multiple external APIs to fetch real-time information.

---

## Random Quote

Fetch a random motivational quote.

```
mycli quote
```

Example Output:

```
"The best way to predict the future is to invent it."
— Alan Kay
```

---

## GitHub User Info

Fetch information about a GitHub user.

```
mycli github <username>
```

Example:

```
mycli github Ipshita29
```

Output:

```
User: Ipshita29
Repos: 64
Followers: 6
```

---

## Random Joke

Fetch a random programming joke.

```
mycli joke
```

---


# Help Command

To see all available commands:

```
mycli --help
```

---

# Project Structure

```
mycli-project
│
├── src / index.ts
├── dist / index.js
├── package.json
└── README.md
```

---

# OOP Implementation

The CLI is structured using **Object-Oriented Programming** principles:

• A main `MyCLI` class initializes the CLI
• Commands are registered through class methods
• Object instance handles execution of the CLI tool

This design makes the project modular and scalable.

---

# Example Demo Commands

```
mycli greet Ipshita
mycli add 10 5
mycli joke
mycli github Ipshita29
mycli quote 
```

---


# Installation

Clone the repository:

```
git clone https://github.com/Ipshita29/mycli-project.git
```

Navigate into the project folder:

```
cd mycli-project
```

Install dependencies:

```
npm install
```

Build the project (if using TypeScript):

```
npm run build
```

Link the CLI globally:

```
npm link
```

Now the CLI command **mycli** will work globally in your terminal.

---
