* Bubble Sorts
Bubble sorts put values in order by iterating through a data set and comparing neighboring numbers. When the sort encounters a smaller value before a greater value, it swaps the values. The sort continues through the data set, value by value, swapping them until the array is properly sorted.
Here’s the basic process of the bubble sort algorithm:

1. Start at the beginning of an array of items.
2. Compare the item you’re looking at to the next item in the list.
3. If this item is smaller than the next one, keep it in place. If it’s greater, swap them.
4. Move on to the next item.
5. Repeat Steps 1–4 until you can go through the whole list without making any swaps.


It's  stable sort. The cards remained sorted, even as we completed more iterations through the set.

Big O worst case space complexity:
O(1), We don't have to find a new space for any of our cards while we were sorting them. That makes the space efficiency 

Big O worst case time complexity:
O(N^2),  Bubble sort has a quadratic runtime — the worst one! 