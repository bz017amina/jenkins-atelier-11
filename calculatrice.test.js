const { add, subtract, multiply, divide } = require('./calculatrice');

test('Addition', () => {
    expect(add(2, 3)).toBe(5);
});

test('Soustraction', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('Multiplication', () => {
    expect(multiply(2, 3)).toBe(6);
});

test('Division', () => {
    expect(divide(6, 3)).toBe(2);
});