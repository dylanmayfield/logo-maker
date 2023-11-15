const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
    describe("draw", () => {
        it("should return a string of Triangle SVG markup", () => {
            const triangle = new Triangle({
            name: "DKM",
            textColor: "blue",
            shapeColor: "white",
            shape: "Triangle",
            });
            expect(triangle.draw()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
});

describe("Circle", () => {
    describe("draw", () => {
        it("should return a string of Circle SVG markup", () => {
            const circle = new Circle({
            name: "DKM",
            textColor: "blue",
            shapeColor: "white",
            shape: "Circle",
            });
            expect(circle.draw()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        });
    });
})

describe("Square", () => {
    describe("draw", () => {
        it("should return a string of Square SVG markup", () => {
            const square = new Square({
            name: "DKM",
            textColor: "blue",
            shapeColor: "white",
            shape: "Square",
            });
            expect(square.draw()).toEqual('<rect width="100%" height="100%" fill="blue" />');
        });
    });
})

