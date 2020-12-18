Merge sort uses an extremely efficient application of “divide and conquer” to sort lists of elements. It takes an array and splits it in half over and over again until it’s small and sorted (there’s the divide part). Then, it merges small sorted pieces together on their way back up (that’s how it conquers). Sound familiar? It’s recursion!

Merge sort is built on two premises:

The easiest list to sort? A single-item list.
Creating one large sorted array by merging two smaller sorted arrays? Not hard to do.

The Components of a Merge Sort
Merge sort is actually two algorithms — the merge sort algorithm and the merge algorithm — that work together to achieve the same goal. The two algorithms each work in a different phase of the process.

Phase 1: Split the array in half until you can’t anymore (aka, divide). This is accomplished with the merge sort algorithm.
Phase 2: Merge those pieces back together (aka, conquer). This is done with the merge algorithm (sometimes called the “merge helper” function).

* Here’s the basic process of the merge algorithm. It starts with the sorted single-element arrays already created by its bestie, the merge sort algorithm:

1. Start at the beginning of two arrays of items.
2. Compare the first item from each array to each other.
3. Whichever value is less, copy it to a results list.
4. Move on to the next item in the array that just gave its first element to the results list.
5. Repeat Steps 1–4 until you have all of the elements from both arrays in the results list.

Big O worst case space complexity:
O(N)

Big O worst case time complexity:
O(N log(N)),
The non-recursive merge algorithm is an O(N) operation — not super efficient. Think about it: Every time you make a comparison, you move one value into the results list. You have to do this N times for each value that you’re merging.
The recursive merge sort algorithm takes O(log(N)) time. This is speedy! The number of elements can increase a lot without the complexity increasing very much at all.