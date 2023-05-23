const searchCandies = require('../lib/candySearch')

describe('search candies', () => {
    it ('finds candy starting with "Ma" and less than 10 pounds', () => {
        expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
    });

    it ('finds candy starting with "Ma" and less than 2 pounds', () => {
        expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ])
    });

    it ('finds candy starting with "S" and less than 10 pounds', () => {
        expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
    });

    it ('finds candy starting with "S" and less than 4 pounds', () => {
        expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ])
    });
})