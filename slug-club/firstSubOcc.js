function findFirstSubstringOccurrence(s, x) {
    const xLength = x.length;
    
    for (let i = 0; i <= s.length - xLength; i++) {
        if (s[i] !== x[0] || s[i + xLength - 1] !== x[xLength - 1]) {
            continue;
        }
        const subset = s.substring(i, i + xLength);
        if (subset === x) {
            return i;
        }
    }
    
    
    return -1;
}

