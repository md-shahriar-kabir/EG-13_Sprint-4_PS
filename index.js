
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

// ------------------------------------------------------
// ------------------------------------------------------

// 03. Find the Difference
// Write a function that finds the extra character added to string t when string s is rearranged and one additional character is added.
// /**
// /**
//  * @param {string} pattern
//  * @param {string} s
//  * @return {boolean}
//  */

var findTheDifference = function(s, t) {
    let result = 0;

    for (let char of s) {
        result ^= char.charCodeAt(0);
    }

    for (let char of t) {
        result ^= char.charCodeAt(0);
    }

    return String.fromCharCode(result);
};

// ------------------------------------------------------
// ------------------------------------------------------

// 04. Reverse Linked List
// Write a transformation function that reverses a singly linked list and returns the new head of the reversed list.
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */

var reverseList = function(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let next = current.next;

        current.next = prev;

        prev = current;
        current = next;
    }

    return prev;
};

// ------------------------------------------------------
// ------------------------------------------------------

// 05. Middle of the Linked List
// Write a function that finds and returns the middle node of a singly linked list. If the list contains two middle nodes, return the second middle node.

// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

// ------------------------------------------------------
// ------------------------------------------------------


// 06. Product of Array Except Self
// Write a function that returns an array where each element is the product of all elements in the input array except the element at the current index. Do not use division.

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
var productExceptSelf = function(nums) {
    const result = new Array(nums.length).fill(1);

    let prefix = 1;

    // Left side product
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;

    // Right side product
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
};


// ------------------------------------------------------
// ------------------------------------------------------

// 07. Remove Nth Node From End of List
// Write a function that removes the nth node from the end of a singly linked list and returns the head of the modified list.

// /**
//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
//  */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    // Move fast pointer n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // Move both until fast reaches the last node
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Remove the target node
    slow.next = slow.next.next;

    return dummy.next;
};