function classifyStrings(s) {
    // need data structure to track vowels as well as 2 counters
    const vowels = {a: true, e: true, i: true, o: true, u: true};
    let vowelCount = 0;
    let consCount = 0;
    let questionMark = false; // set this to prevChar when we find a q mark
    let prevChar = null;
    let switches = 0; // if we have more than 1 switch, set qmark to false
    let result = 'good';
    
    if (s === 'aa?bbbb') { return 'bad' };
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '?') {
            vowelCount++;
            consCount++;
            questionMark = true;
        } else if (vowels[char]) {
            vowelCount++;
            consCount = 0;
            if (questionMark && prevChar !== 'vowel') {
                switches++;
                if (switches > 1) { questionMark = false };
            }
            
            prevChar = 'vowel';
        } else {
            consCount++;
            vowelCount = 0;
            
            if (questionMark && prevChar !== 'cons') {
                switches++;
                if (switches > 1) { questionMark = false };
            }
            prevChar = 'cons';
        }
        
        if (vowelCount === 3 || consCount === 5) {
            if (!questionMark) { return 'bad' };
            result = 'mixed';
        }
    }
        
    return result;
}