const fizzbuzzIf = require('../src/fizzbuzzIf');

test('3 katları Fizz döner', () => {
    expect(fizzbuzzIf(3)).toBe('Fizz');
    expect(fizzbuzzIf(6)).toBe('Fizz');
});

test('5 katları Buzz döner', () => {
    expect(fizzbuzzIf(5)).toBe('Buzz');
});

test('3 ve 5 katları FizzBuzz döner', () => {
    expect(fizzbuzzIf(15)).toBe('FizzBuzz');
});

test('Diğer sayılar kendisi döner', () => {
    expect(fizzbuzzIf(1)).toBe(1);
});



