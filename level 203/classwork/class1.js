// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.
function longestConsecutive(nums)
{
    if (nums.length === 0) return 0;
    const numSet = new Set(nums);
    let longest = 0;

    for (const num of numSet) {

        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longest = Math.max(longest, currentStreak);
        }
    }

    return longest;
}












// You are given an array of strings words, where each string represents a word containing lowercase English letters.
// You are also given an integer array weights of length 26, where weights[i] represents the weight of the ith lowercase English letter.
// The weight of a word is defined as the sum of the weights of its characters.
// For each word, take its weight modulo 26 and map the result to a lowercase English letter using reverse alphabetical order (0 -> 'z', 1 -> 'y', ..., 25 -> 'a').
// Return a string formed by concatenating the mapped characters for all words in order.

function mapWordsToLetters(words, weights) {
    const result = [];
    const reverseAlphabet = 'zyxwvutsrqponmlkjihgfedcba';

    for (const word of words) {
        let weight = 0;
        for (const char of word) {
            weight += weights[char.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        const mappedChar = reverseAlphabet[weight % 26];
        result.push(mappedChar);
    }

    return result.join('');
}
