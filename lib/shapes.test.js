const { Triangle, Circle, Square } = require("./shapes");

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

describe("Triangle", () => {
    describe("draw", () => {
        it("should return a string of Triangle SVG markup", () => {
            const triangle = new Triangle("blue");
            expect(triangle.draw()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
});

describe("Circle", () => {
    describe("draw", () => {
        it("should return a string of Circle SVG markup", () => {
            const circle = new Circle("blue");
            expect(circle.draw()).toBe('<circle cx="150" cy="115" r="80" fill="blue" />');
        });
    });
})

describe("Square", () => {
    describe("draw", () => {
        it("should return a string of Square SVG markup", () => {
            const square = new Square("blue");
            expect(square.draw()).toBe('<rect x="73" y="40" width="160" height="160" fill="blue" />');
        });
    });
})

module.exports = { Triangle, Circle, Square };