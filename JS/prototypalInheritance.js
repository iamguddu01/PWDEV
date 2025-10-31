class Shape {
    constructor(length) {
        this.length = length;
    }
}

Shape.prototype.area = function() {
    return this.length * this.length;
}

let s1 = new Shape(10);
console.log(s1.area());