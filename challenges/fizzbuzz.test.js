const FizzBuzz = require('../bites/fizzBuzz')

describe('fizzbuzz', () => {
    it('inputs 3 returns Fizz', () => {
        expect(FizzBuzz(3)).toBe('Fizz');
    });

    it('inputs 5 returns Buzz', () => {
        expect(FizzBuzz(5)).toBe('Buzz');
    });

    it('inputs 8 returns 8', () => {
        expect(FizzBuzz(8)).toBe(8);
    });

    it('inputs 15 returns FizzBuzz', () => {
        expect(FizzBuzz(15)).toBe('Fizzbuzz');
    });

    it('inputs 18 returns Fizz', () => {
        expect(FizzBuzz(18)).toBe('Fizz');
    });

    it('inputs 20 returns Buzz', () => {
        expect(FizzBuzz(20)).toBe('Buzz');
    });
});