class LogoText {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }
    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
    }
}

class SVG {
    constructor(shape, logotext) {
        this.logotext = logotext;
        this.shape = shape;
    }
    render() {
        const svg = `<svg version="1.1" width="300" height="200" xmins="http://www.w3.org/2000/svg">${this.shape.render()}${this.logotext.render()}</svg>`;
        return svg;
    }
}
module.exports = { SVG, LogoText };