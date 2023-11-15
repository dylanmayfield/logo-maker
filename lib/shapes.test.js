const triangle = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const circle = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');

const square = new Square();
shape.setColor("blue");
expect(shape.render()).toEqual('<rect width="100%" height="100%" fill="blue" />');