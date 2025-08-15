const fizzbuzzSwitch = require('../src/fizzbuzzSwitch');

test('3 katları Fizz döner', () => {
    expect(fizzbuzzSwitch(3)).toBe('Fizz');
    expect(fizzbuzzSwitch(6)).toBe('Fizz');
});

test('5 katları Buzz döner', () => {
    expect(fizzbuzzSwitch(5)).toBe('Buzz');
    expect(fizzbuzzSwitch(10)).toBe('Buzz');
});

test('3 ve 5 katları FizzBuzz döner', () => {
    expect(fizzbuzzSwitch(15)).toBe('FizzBuzz');
    expect(fizzbuzzSwitch(30)).toBe('FizzBuzz');
});

test('Diğer sayılar kendisi döner', () => {
    expect(fizzbuzzSwitch(1)).toBe(1);
    expect(fizzbuzzSwitch(2)).toBe(2);
    expect(fizzbuzzSwitch(4)).toBe(4);
});
