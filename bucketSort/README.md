How many buckets should there be?

A general rule of thumb: If there’s no one obvious way to create your buckets, use the square root of the number of items you’re sorting. So, if you have an array of 100 elements, 10 buckets would be appropriate.

When to Use Bucket Sort
Bucket and radix sorts are most useful when you have a relatively dense range of numbers. “Dense” just means that the values in your starting array are relatively close together.However, you don’t want your data set to be too dense. If your data set is very dense (i.e., its values are all the same or very similar), it would all be sorted into one bucket. This makes bucket sort’s efficiency a slow O(N^2)!

How Bucket Sort Works
Here’s the general idea of how bucket sort works:

1. Start with your initial array; let’s say we have [29, 25, 3, 49, 9, 37, 21, 43].
2. Set up an array of initially empty “buckets.” Because this array contains eight elements, we’ll use three buckets to start: Bucket 1, 0-16; Bucket 2, 17-32; Bucket 3, 33-49.
3. Go over the original array and scatter each object in its bucket: Bucket 1, [3, 9]; Bucket 2, [29, 25, 21]; Bucket 3, [49, 37, 43].
4. Sort each bucket: Bucket 1, [3, 9]; Bucket 2, [21, 25, 29]; Bucket 3, [37, 43, 49].
5. Gather: Go through the buckets sequentially and gather everything back into the original single array.

Big O worst case space complexity:
O(N), Because bucket sort creates an entirely new array for the sorted values, it has 

Big O worst case time complexity:
