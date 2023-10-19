// create a parent shape class containing the three shapes as each class of its own

class Logo { 
    constructor (shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
}

class Triangle extends Logo {
    constructor (shapeColor, textColor, text) {
        super(shapeColor, textColor, text);
    }
}