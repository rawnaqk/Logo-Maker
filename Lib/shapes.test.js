const { Circle, Triangle, Square } = require('./shapes');

test('Circle renders correctly', () => {
    const circle = new Circle('red');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
});

test('Triangle renders correctly', () => {
    const triangle = new Triangle('blue');
    expect(triangle.render()).toBe('<polygon points="150,20 220,180 80,180" fill="blue" />');
});

test('Square renders correctly', () => {
    const square = new Square('green');
    expect(square.render()).toBe('<rect x="70" y="20" width="160" height="160" fill="green" />');
});
