import getName from './getName.js';

describe('getName', () => {
    it('returns the name property of an object', () => {
        const spot = { name: 'spot', age: 5, weight: '20 lbs' }
        const expected = spot.name; 
        const actual = getName(spot);

        expect(actual).toEqual(expected);
    });
});