
// 01. Isomorphic Strings
// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    const mapST = {};
    const mapTS = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        // s -> t mapping check
        if (mapST[charS] && mapST[charS] !== charT) {
            return false;
        }

        // t -> s mapping check
        if (mapTS[charT] && mapTS[charT] !== charS) {
            return false;
        }

        mapST[charS] = charT;
        mapTS[charT] = charS;
    }

    return true;
};


// ------------------------------------------------------
// ------------------------------------------------------

// 02. Word Pattern
// /**
//  * @param {string} pattern
//  * @param {string} s
//  * @return {boolean}
//  */
var wordPattern = function(pattern, s) {
    const words = s.split(" ");

    // Number of characters and words must be equal
    if (pattern.length !== words.length) {
        return false;
    }

    const charToWord = {};
    const wordToChar = {};

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        // pattern character -> word
        if (charToWord[char] && charToWord[char] !== word) {
            return false;
        }

        // word -> pattern character
        if (wordToChar[word] && wordToChar[word] !== char) {
            return false;
        }

        charToWord[char] = word;
        wordToChar[word] = char;
    }

    return true;
};