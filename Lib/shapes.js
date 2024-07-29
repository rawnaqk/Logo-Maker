class Shape {
    constructor(color) {
        this.color = color;
    }

    render() {
        throw new Error('Render method not implemented');
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,20 220,180 80,180" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square };