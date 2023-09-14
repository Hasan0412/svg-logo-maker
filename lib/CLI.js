const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./shapes");
const {SVG, LogoText} = require("./svg");
const questions = require("./questions");

class CLI {
    constructor() {}

    makeSVG(choices) {
        const logoText = new LogoText(choices.text, choices.textcolor);
        switch (choices.shape) {
            case "circle":
                const circle = new Circle(choices.shapeColor);
                return new SVG(circle, logoText);
            case "square":
                const square = new Square(choices.shapeColor);
                return new SVG(square, logoText);
            case "triangle":
                const triangle = new Triangle(choices.shapeColor);
                return new SVG(triangle, logoText);
        }
    }
}