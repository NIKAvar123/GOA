function Between(start, end, number) {
    if (typeof start === 'number' & typeof end === 'number' & typeof number === 'number') {
        let min = Math.min(start, end);
        let max = Math.max(start, end);
        return number >= min & number <= max;
    } else {
        throw new Error('All arguments must be numbers.');
    }
}
