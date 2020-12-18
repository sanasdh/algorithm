# Quick Sort
The second type of divide-and-conquer sort is the quick sort. It differs from merge sort in how it approaches the divide phase.

Merge sorts divide an array into two pieces, while quick sorts divide an array into three parts. 

The parts are:

* The pivot (a single element).
* The left partition, an array containing numbers lower than the pivot.
* The right partition, an array containing numbers higher than the pivot.

After this, the pivot is considered sorted, as it’s a single element. Now, we need to recursively call quick sort on the partitioned array on either side of the pivot in order to sort those elements.

Big O worst case space complexity:
O(log N)

Big O worst case time complexity:
O(N^2),
Quick sort’s worst-case efficiency of O(N^2) begs the question: Why would we ever use quick sort over merge sort?

Merge sort and quick sort actually have the same average-case time complexity, Θ(N log(N)), which is efficient! You can expect their performance to be efficient most of the time.

And in practice, quick sort tends to even be a little bit faster than merge sort. Why? Because quick sort has a much lower space complexity, at O(log(N)), than merge sort’s space complexity of O(N). Using up all of that extra memory can slow merge sort down at times.