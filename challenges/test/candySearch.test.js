const searchCandies = require('../lib/candySearch')

describe('search candies', () => {
    it ('finds candy starting with "Ma" and less than 10 pounds', () => {
        expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
    });
})