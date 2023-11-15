// create a parent shape class containing the three shapes as each class of its own

class Logo { 
    constructor (shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
    draw() {
        return `<text x="50%" y="50%" fill='${this.textColor}' font-size="40">${this.text}</text>`;
    
    }
}

class Triangle extends Logo {
    constructor (shapeColor, textColor, text) {
        super(shapeColor, textColor, text);
    }
    draw() {
        return `<polygon points="150, 18 244, 182 56, 182" fill='${this.shapeColor}' />`;
    }
}

class Square extends Logo {
    constructor (shapeColor, textColor, text) {
        super(shapeColor, textColor, text);
    }
    draw() {
        return `<rect width="100%" height="100%" fill='${this.shapeColor}' />`;
    }
}

class Circle extends Logo {
    constructor (shapeColor, textColor, text) {
        super(shapeColor, textColor, text);
    }
    draw() {
        return `<circle cx="150" cy="100" r="80" fill='${this.shapeColor}' />`;
    }
}

module.exports = {Triangle, Square, Circle};