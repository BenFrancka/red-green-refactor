import copyAndPush from './copyAndPush.js';

describe('copyAndPush', () => {
    it('creates a new array that contains all items from the original array with a new item pushed to the end', () => {
        const numbers = [1, 2, 3];
        const expected = [1, 2, 3, 4]
        const actual = copyAndPush(numbers, 4);

        expect(actual).toEqual(expected);
    });

    describe('copyAndPush', () => {
        it('creates a new array that contains all items from the original array with a new item pushed to the end', () => {
            const numbers = [1, 2, 3];
            const newNumbers = copyAndPush(numbers, 4);

            expect(numbers).not.toEqual(newNumbers);
        });
    });
});