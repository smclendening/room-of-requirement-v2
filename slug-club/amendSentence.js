function amendTheSentence(s) {
    let amended = `${s[0].toLowerCase()}`;
    
    for (let i = 1; i < s.length; i++) {
        const letter = s[i];
        // if letter is capitalized
        if (letter.toUpperCase() === letter) {
            // add a space to amended
            amended += ` ${letter.toLowerCase()}`;
            // add lower-case letter to amended
        } else {
        // else
            // add letter to amended 
            amended += letter;
        }
    }
    return amended;
}
