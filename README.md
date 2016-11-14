#Binary Search

Binary search is a search algorithm used to find the position of a target item in a sorted array.

![Morty Searching](http://i.giphy.com/l41lFw057lAJQMwg0.gif)

### Why is this important?
<!-- framing the "why" in big-picture/real world examples -->
*This workshop is important because:*

Not only is binary search a popular interview question, but it's also a fundamental concept in how efficient searches are performed.

### What are the objectives?
<!-- specific/measurable goal for students to achieve -->
*After this workshop, developers will be able to:*

- Explain on a high level what a binary search is
- Implement binary search in JavaScript

###Steps of Binary Search

1. The binary search algorithm begins by comparing the target value to the value of the middle element of the sorted array. 
2. If the target value is equal to the middle element's value, then the position is returned and the search is finished. 
3. If the target value is less than the middle element's value, then the search continues on the lower half of the array (excluding middle element;) or if the target value is greater than the middle element's value, then the search continues on the upper half of the array. 
4. This process continues, eliminating half of the elements, and comparing the target value to the value of the middle element of the remaining elements - until the target value is either found (and its associated element position is returned), or until the entire array has been searched (and "not found" is returned). 
[Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)

> What does binary search assume about the set of numbers it will search through?

##Exercise

Everyone in the room gets a number and will be sorted into a collection, lowest to highest. How can we act out binary search to find a specific number? Break it down step by step.

After this real-life demo, students will pseudocode their plan for implementing a binary search, swap solutions with a partner from across the room, exchange feedback, and then start coding.

##Challenge
Write a binary search algorithm that will take an array and a single number as parameters and return a **boolean true** if that number exists in that array and a **boolean false** if that number does not exists.

###Example 1

```javascript
array = [0,2,4,6,8,10,12,14,16,18,20]
number = 8
binarySearch(array, number) => 4
```

###Example 2

```javascript
array = [0,2,4,6,8,10,12,14,16,18,20]
number = 7
binarySearch(array, number) => -1
````

##Stretch Challenge
Implement your binary search algorithm using a recursive pattern!  This method is faster and more eloquent, but will stretch your imagination and sanity.


