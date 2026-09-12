
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

// ------------------------------------------------------
// ------------------------------------------------------


// 08. Find First and Last Position of Element in Sorted Array
// Write a function that finds the starting and ending position of a given target value in a sorted array. Return [-1, -1] if the target does not exist.
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

var searchRange = function(nums, target) {
    let first = -1;
    let last = -1;

    // Find first position
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            first = mid;
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // Find last position
    left = 0;
    right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            last = mid;
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return [first, last];
};

// ------------------------------------------------------
// ------------------------------------------------------

// 09. Permutation in String 
// Write a validation function that determines whether one string contains a permutation of another string as a substring.
// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    const count1 = new Array(26).fill(0);
    const count2 = new Array(26).fill(0);

    // Count characters of s1
    for (let i = 0; i < s1.length; i++) {
        count1[s1.charCodeAt(i) - 97]++;
    }

    // First window
    for (let i = 0; i < s1.length; i++) {
        count2[s2.charCodeAt(i) - 97]++;
    }

    // Check first window
    if (count1.join() === count2.join()) {
        return true;
    }

    // Slide the window
    for (let i = s1.length; i < s2.length; i++) {
        // Add new character
        count2[s2.charCodeAt(i) - 97]++;

        // Remove leftmost character
        count2[s2.charCodeAt(i - s1.length) - 97]--;

        // Check current window
        if (count1.join() === count2.join()) {
            return true;
        }
    }

    return false;
};

// ------------------------------------------------------
// ------------------------------------------------------

// 10. Find All Anagrams in a String 
// Write a function that finds all starting indices of substrings in s that are anagrams of string p. Return the indices in any order.

// /**
//  * @param {string} s
//  * @param {string} p
//  * @return {number[]}
//  */
var findAnagrams = function(s, p) {
    const result = [];

    if (p.length > s.length) return result;

    const countP = {};
    const countWindow = {};

    // Count characters in p
    for (let char of p) {
        countP[char] = (countP[char] || 0) + 1;
    }

    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        countWindow[char] = (countWindow[char] || 0) + 1;

        // Keep window size equal to p.length
        if (right - left + 1 > p.length) {
            const leftChar = s[left];

            countWindow[leftChar]--;

            if (countWindow[leftChar] === 0) {
                delete countWindow[leftChar];
            }

            left++;
        }

        // Check if window is an anagram of p
        if (JSON.stringify(countP) === JSON.stringify(countWindow)) {
            result.push(left);
        }
    }

    return result;
};