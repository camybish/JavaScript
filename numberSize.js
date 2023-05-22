const getNumberSize = (a) => {
    if (a > 0) {
        return 'Positive'
    } else if (a === 0) {
        return 'This is zero'
    } else if (a < 0) { 
        return 'Negative'
    } else {
        return 'Not a number'
    }
}; 

module.exports = getNumberSize;