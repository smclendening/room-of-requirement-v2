var validPalindrome = function(s) {
    // abfcdcba
    let deleted = false;
    let start = 0;
    let end = s.length - 1;
    let valid = true;
    
    // while start is less than end
    while (start < end) {
        // if start char is not same as end char
        if (s.charAt(start) !== s.charAt(end)) {
            // if deleted is true
            if (deleted) {
                // set valid to false, break
                valid = false;
                break;
            } else {
               // else
                deleted = true;
                    // set deleted to true
                if (s.charAt(start + 1) === s.charAt(end)) {
                    // if start + 1 is end, increment start and continue 
                    start++;
                    continue;
                } else if (s.charAt(start) === s.charAt(end - 1)) {
                    // else if end - 1 is start, decrement start and continue
                    end--;
                    continue;
                } else {
                    // else set valid to false and break
                    valid = false;
                    break;
                }
            }
        }
        // increment start, decrement end
        start++;
        end--;
    }
    
    // return valid boolean
    return valid;
};