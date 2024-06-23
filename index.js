#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([{
        type: "list",
        name: "question_1",
        message: "Q1.in which country the Titanic built?",
        choices: ["A.United Kingdom", "B.Farnce", "C.United ststes"]
    },
    {
        type: "list",
        name: "question_2",
        message: "Q2.How old is Earth?",
        choices: ["A.254 million years old", "B.4.5 billion years old", "C.13.5 billion years old"]
    },
    {
        type: "list",
        name: "question_3",
        message: "Q3.Who is consider the father of geometry?",
        choices: ["A.Aristotle", "B.Euclid", "C.Pythagoras"]
    },
    {
        type: "list",
        name: "question_4",
        message: "Q4.What is the capital of Sout Korea?",
        choices: ["A.Kyoto", "B.Bangkok", "C.seol"]
    },
    {
        type: "list",
        name: "question_5",
        message: "Q5.What is the capital of Unitet State?",
        choices: ["A.Los Angeles", "B.New York", "C.Washington.D.C"]
    }
]);
let score = 0;
let ans = "";
if (quiz.question_1.length > 0) {
    ans = quiz.question_1;
}
if (quiz.question_2.length > 0) {
    ans = quiz.question_2;
}
if (quiz.question_3.length > 0) {
    ans = quiz.question_3;
}
if (quiz.question_4.length > 0) {
    ans = quiz.question_4;
}
if (quiz.question_5.length > 0) {
    ans = quiz.question_5;
}
switch (ans) {
    case "A.United Kingdom":
        console.log("1.Correct");
        ++score;
        break;
    case "B.4.5 billion years old":
        console.log("2.Correct");
        ++score;
        break;
    case "B.Euclid":
        console.log("3.Correct");
        ++score;
        break;
    case "C.seol":
        console.log("4.Correct");
        ++score;
        break;
    case "C.Washington.D.C":
        console.log("5.Correct");
        ++score;
        break;
    default:
        console.log("Incorrect!");
}
console.log(`Score:${score}`);
