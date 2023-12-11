//question 1 : Given a sorted array arr[] consisting of N distinct integers and an integer K, the task is to find the index of K, if it’s present in the array arr[]. Otherwise, find the index where K must be inserted to keep the array sorted.

// Input: arr[] = {1, 3, 5, 6}, K = 5
// Output: 2
// Explanation: Since 5 is found at index 2 as arr[2] = 5, the output is 2.

// Input: arr[] = {1, 3, 5, 6}, K = 2
// Output: 1
// Explanation: Since 2 is not present in the array but can be inserted at index 1 to make the array sorted.


// O(logn)
function binary1( arr, k ) {
    let left = 0;
    let right = arr.length - 1;

    while ( left <= right ) {
        let mid = Math.floor( ( left + right ) / 2 )
        if ( k === arr[ mid ] ) return mid;
        if ( k < arr[ mid ] ) {
            right = mid - 1
        } else {
            left = mid + 1
        }

    }

    return left;
}


// O(logn)
function recursiveBinarySearch( arr, k ) {
    
    return search(arr, k, 0, arr.length - 1)
}

function search( arr, k, left, right ) {
    if ( left > right ) return -1;
    let mid = Math.floor( ( left + right ) / 2 );
    if ( k === arr[ mid ] ) return mid;
    if ( k < arr[ mid ] ) {
       return search(arr, k, left, mid -1)
    } else {
      return  search(arr, k, mid + 1, right)
    }
}

// console.log(recursiveBinarySearch([1,2,3,4,5], 5))
// console.log(recursiveBinarySearch([1,2,3,4,5], 2))
// console.log(recursiveBinarySearch([1,2,3,4,5], 4))
// console.log(recursiveBinarySearch([1,3,4,5, 6], 7))
// console.log('new')
// console.log(binary1([1,2,3,4,5], 5))
// console.log(binary1([1,2,3,4,5], 2))
// console.log(binary1([1,2,3,4,5], 4))
// console.log(binary1([1,3,4,5, 6], 7))