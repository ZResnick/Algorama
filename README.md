# Algorama

### The premiere outlet for algoing...

This repo is built for algorithm problems and practice, with the main goal being to hone my problem-solving methodogy. A list of all the algorithms is below, grouped by category.

## The Problems

(E) === Easy, (M) === Medium, (H) === Hard

### String Manipulation

- Roman Numerals to Integers (E) BLOOMBERG QUESTION
- Longest Uncommon Substring (M) BLOOMBERG QUESTION
- Reverse an Integer (E) BLOOMBERG QUESTION
- Are these Strings Isomorphic? (M)
- Number of Matching Subsequences (M)
- Needle in a Haystack (E)
- All Permutations of a string (M) BLOOMBERG QUESTION
- Validate Parentheses (E) BLOOMBERG QUESTION
- Balloon Finder (E)
- Uncommon Words (E)
- License Creator (E)
- Compare Strings by Frequency of the Smallest Character (E)
- Turn a number into a properly comma delimitated string (E)
- Return the most used character in a string (E)
- Interweave strings (E)
- Tic Tac Toe Solver (E)
- Remove Third Character (E)
- One Dimensional Candy Crush (M) Stack Problem BLOOMBERG QUESTION
- First Unique Character in a String (E) BLOOMBERG QUESTION
- Remove all Duplicates (E) BLOOMBERG QUESTION
- Decode String (H) BLOOMBERG QUESTION

### Linked Lists

- Swap Nodes (M)
- Reverse a Linked List (E)
- Is there a loop in this Linked List? (E).
  - Tortoise and the Hare method
- Remove Duplicates (E)
- Remove All Targeted Values from a Linked List (E)
- Merge a Sorted Linked List (M) BLOOMBERG QUESTION
- Remove nth Node (M)
- Do They Merge? (E) BLOOMBERG QUESTION
- Add Two Numbers (M) BLOOMBERG QUESTION
- LRU Cache (M)
- Odds and Evens (M) BLOOMBERG QUESTION
- Flatten a Multilevel Doubly Linked List (M) BLOOMBERG QUESTION
- Insert Into a Sorted Cyclical List (M) BLOOMBERG QUESTION

### Array Manipulation

- Binary Search (E)
- Minimum Jumps to end of Array (M)
- Valid Sudoku Solution (M)
- Number of Islands (M)
- Merge Sort (E)
- Rotate a Matrix (M)
- Best Time to Buy and Sell Stocks (E) BLOOMBERG QUESTION
- Find the Duplicate Number (M)
- Generate Pacsal's Triangle (E)
- Product of Array Except Self (naive and optimized) (M) BLOOMBERG QUESTION
- Minimum Domino Flip (M)
- Pair Sum (E) BLOOMBERG QUESTION
- Move all zeros to the end of the array (E) BLOOMBERG QUESTION
- Dumb Pacman (M)
- Merge Sort Test (N/A) console.table()
- Median Sort (M)
- Potion Mixing (M)
- Max sum of equal sums (M)
- Efficiently search a matrix (M)
- Merge in Place (E) BLOOMBERG QUESTION
- Fruit into baskets (M)
- Two City Scheduling Costs (M) BLOOMBERG QUESTION
- Transaction History - Invalid Transactions (M) BLOOMBERG QUESTION
- Meeting Rooms II (M) BLOOMBERG QUESTION
- Elimination Game (M) BLOOMBERG QUESTION
- Valid Word Square (E) BLOOMBERG QUESTION
- Missing Element in Sorted Array (E) BLOOMBERG QUESTION
- 2-D Candy Crush (M) BLOOMBERG QUESTION

### Binary Trees

You can require a BST creator from ./treeCreator for testing purposes using -----> const bst = require('./treeCreator')

- Simple Binary Search (E)
- Merge Binary Trees (E)
- Max Depth of a Binary Tree (M) BLOOMBERG QUESTION
- Reverse Breadth First Levels (E) BLOOMBERG QUESTION
- Minimum Difference (E)
- Range Sum (E)
- Pre-order Traversal of nAry tree (E)
- Validate BST (M) BLOOMBERG QUESTION
- Flatten a Binary Tree (E) BLOOMBERG QUESTION
- Invert a Binary Tree (E)

### Recursion, Backtracking, Game Theory

- Generate Parentheses (H) BLOOMBERG QUESTION
- N Queens (H)
- N Queens Naive (H) _Works but is not ideal_
- Does Word Exist in Matrix (M)
- Which Words Exist in Matrix - Word Search (M) BLOOMBERG QUESTION
- Path With Maximum Gold (M)

### Graphs

You can require a non-directional Graph creator for testing purposes using -----> const graph = require('./nonDirectedGraph.js')

You can require a Directional Graph creator for testing purposes using -----> const graph = require('./directedGraph.js')

You can require a Weighted Non-Directed Graph Constructor for testing purposes using -----> const graph = require('./WeightedGraph.js')

- Simple Graph Implementation (E)
- Does Path Exist Between Two Nodes in a Graph (E)
- Djikstras Shortest Path Algorithm (M)
- All Paths from Start to End in an Acyclic Graph (M) BLOOMBERG QUESTION
- Keys and Rooms - Can you Escape?? (M) SIMON DATA
- Kill Process (M) BLOOMBERG QUESTION

### Dynamic Programming

- Coin Change (M) BLOOMBERG QUESTION
- Unique Paths I (M)
- Unique Paths II (M)
- Min Path Sum (M) BLOOMBERG QUESTION
- Min Path of a Triangle (M)
- River Sizes (M)
- Levenshtein Distance (H) BLOOMBERG QUESTION
- Number of Islands (M) BLOOMBERG QUESTION
- Longest Increasing Subsequence (M)
- Subset Sum (M)
- Word Break (M) BLOOMBERG QUESTION
- Jump Game (M)
- Handshake Problem (E)
- Fibonacci Sequence (E)
- Min Falling Path Sum (M)
- Maximum Sub Array (E) BLOOMBERG QUESTION
- House Robber (E) BLOOMBERG QUESTION

### Heaps

You can require a:

1. Max Binary Heap Constructor from /maxHeapConstructor.js for testing purposes using -----> const Heap = require('./heapConstructor.js') and let newHeap = new Heap()

2. Max Priority Queue Constructor from /maxPriorityQueueConstructor.js for testing purposes using -----> const MaxQueue = require('./maxPriorityQueueConstructor.js') and let newMaxQueue = new MaxQueue()

3. Min Priority Queue Constructor from /minPriorityQueueConstructor.js for testing purposes using -----> const MinQueue = require('./minPriorityQueueConstructor.js') and let newMinQueue = new MinQueue()

- Min Priority Queue Test
- Max Priority Queue Test
- Max Heap Test

### Miscellaneous

- Count the ones in the Binary Representation of a Given Integer, the Hamming Weight (M)
- Count the non-zero numbers in the n-Ary Representation of a Given Integer, the N-Hamming Weight (M)
- Currying Function (M)
- Pumpkin Picker (E)

### Design Questions

- LRU Cache (M) BLOOMBERG QUESTION
- Min Stack with Constant Time Operations (E) BLOOMBERG QUESTION
- First Unique Number in Constant Time (M) BLOOMBERG QUESTION
- Insert Delete GetRandom O(1)(M) BLOOMBERG QUESTION

### Bloomberg Questions by Frequency

See all the questions here: https://leetcode.com/company/bloomberg/

[Flatten a Nested Linked List](linkedLists/flattenANestedDoublyLinkedList.js)
[Two City Scheduling](arrays/twoCityScheduling.js)
[Invalid Transactions](arrays/transactionHistory.js)
[All Paths from Start to End in an Acyclic Graph](graphs/allPathsInAcyclic.js)
[2-D Candy Crush](arrays/2DCanyCrush.js)
[Decode String](stringManipulation/decode.js)
[LRU Cache](designQuestions/lruCache.js)
[Number of Islands](dynamicProgramming/numOfIslands.js)
[Min Stack](designQuestions/minStackConstantTime.js)
[Insert Delete GetRandom O(1)](designQuestions/insertDeleteGettRandomConstantTime.js)
[Word Break](dynamicProgramming/wordBreak.js)
[Kill Process](graphs/killProcess.js)
[Meeting Rooms II](arrays/meetingRooms.js)
[Missing Element in Sorted Array](arrays/missingElementInSortedArray.js)
[Valid Word Square](arrays/validWordSquare.js)
[Elimination Game](arrays/eliminationGame.js)
[Remove Duplicates](stringManipulation/removeAllDuplicatesCandyCrushStyle.js)
[One Dimensional Candy Crush](stringManipulation/oneDimensionalCandyCrush.js)
[Add Two Numbers](linkedLists/addTwoNumbers.js)
[Move Zeroes](arrays/moveZerosToEnd.js)
[Pair Sum](arrays/pairSum.js)
[Odds and Evens](linkedLists/oddsAndEvens.js)
[First Unique Character In A String](stringManipulation/firstUniqueCharacter.js)
[Insert Into a Sorted Cyclical List](linkedLists/insertIntoSortedCircularList.js)
[Longest Uncommon Sub String](stringManipulation/longestSubstring.js)
[Word Search](gameTheory/whichWordsExist.js)
[Levenshtein Distance](dynamicProgramming/LevenshteinDistance.js)
[Valid Anagram](stringManipulation/validAnagram.js)
[Generate Parentheses](gameTheory/generateParens.js)
[Merge Two Sorted Lists](linkedLists/mergeSortedLists.js)
[Intersection of Two Sorted Lists](linkedLists/doTheyMerge.js)
[Validate BST](binaryTrees/validateBST.js)
[Permutations](arrays/allPermutations.js)
[Coin Change](dynamicProgramming/coinChange.js)
[Flatten a Binary Tree to Linked List](binaryTrees/flattenTree.js)
[Merge Sorted Array](arrays/mergeInPlace.js)
[BST Level Order Traversal](binaryTrees/reverseBreadthFirst.js)
[Validate Parens](stringManipulation/validateParentheses.js)
[Roman to Integer](stringManipulation/RomanToInt.js)
[Min Path Sum](dynamicProgramming/minPathSum.js)
[Best Time to Buy and Sell Stock](arrays/buyAndSellStocks.js)
[House Robber](dynamicProgramming/houseRobber.js)
[Product of Array Except Self](arrays/productExceptSelf.js)
[Max Depth of Binary Tree](binaryTrees/maxDepth.js)
[Maximum Sub Array](dynamicProgramming/maximumSubarray.js)
[Reverse Integer](stringManipulation/revereseInteger.js)

Frequency not listed:
[First Unique Character in Constant Time](designQuestions/firstUniqueNumber.js)
