---
layout: post
title: Given a 2D array, find the maximum sum subarray in it
---

If you're given a matrix, you want to find out what the submatrix is with the maximum sum. I've taken the answer from [GeeksForGeeks](http://www.geeksforgeeks.org/dynamic-programming-set-27-max-sum-rectangle-in-a-2d-matrix/) and converted it to Python so I could understand it better.

### TL; DR (I'm here just for the code)

```python
import numpy as np

def kadane(a):
  result = (float('-inf'), 0, -1)
  current_sum, current_start = 0, 0

  for i, item in enumerate(a):
    current_sum += item

    if current_sum < 0:
      current_sum = 0
      current_start = i + 1

    elif current_sum > result[0]:
      result = (current_sum, current_start, i)

  return result

def maximum_submatrix(a):
  rows = len(a)
  cols = len(a[0])
  max_sum = float('-inf')
  left, top, right, bottom = 0, 0, 0, 0

  for left_col in range(cols):
    tmp = np.zeros(rows)

    for right_col in range(left_col, cols):

      for i in range(rows):
        tmp[i] += a[i][right_col]

      max_ending_here, top_c, bottom_c = kadane(tmp)

      if max_ending_here > max_sum:
        max_sum, left, top, right, bottom = (
            max_ending_here, left_col, top_c, right_col, bottom_c)

  return (max_sum, a[left:right+1, top:bottom+1])

a = np.array(
    [
      [1, 2, -1, -4, -20],
      [-8, -3, 4, 2, 1],
      [3, 8, 10, 1, 3],
      [-4, -1, 1, 7, -6]
    ]
)

print a
s, a = maximum_submatrix(a)
print s
print a
```

---

## The maximal subarray problem
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
![Stage 1](images/two.svg)
![Stage 2](images/three.svg)
![Stage 3](images/four.svg)
![Stage 4](images/five.svg)
![Stage 5](images/six.svg)
![Stage 6](images/seven.svg)
![Stage 7](images/eight.svg)

-------
