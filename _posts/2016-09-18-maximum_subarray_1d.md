---
layout: post
title: Maximum Subarray (Python) 
---

Let's work with the array:

```
[-5, 1, 2, -1, 4, -10]

```

We want to find the subarray with the maximum possible sum.

For the example above, the maximal subarray comprises the cells in blue.

![Start and end of the array](images/one.svg)

The sum of this subarray is 6.

All other subarrays will have a lesser sum, for example, including the -10 will make the sum -4, and excluding the 4 will make it 2.

**Our task is: Given an array, find the `sum`, `start` and `end` values for the maximal sum subarray.**

---

## Kadane's solution for 1D

[Kadane's algorithm](https://en.wikipedia.org/wiki/Maximum_subarray_problem) looks deceptively easy.

In the following solution, we use `current_start` and `i` to keep track of the current subarray.
We maintain a running `current_sum` value for the subarray we're currently considering.

Whenever we find the `current_sum` to be larger than the max sum (`result[0]`), we update the result (maximum sum, start and end indices).

```python
def kadane(a):

  if not a:
    raise ValueError('Empty array!')
    
  current_sum, current_start = a[0], 0
  result = (current_sum, 0, 0)

  for i, item in enumerate(a[1:], start=1):

    if current_sum + item < item:
      # discard the previous subarray, it's not optimal
      current_start = i
      current_sum = item
    else:
      current_sum += item

    if current_sum > result[0]:
      # update the maximum sum and start and end indices
      result = (current_sum, current_start, i)

  return result
```

Here's an example of running through this algorithm:

<iframe style="position: relative; height: 320px; width: 561px; max-width: 100%" src="/slides/kadane-1d" frameBorder="0">
  Please use a newer browser!
</iframe>

-------
