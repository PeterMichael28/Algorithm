// problem :given an array of 'n' elements and a target element 't', find the index of t in the array, return -1 if the target element is not found

// binary search only works on sorted array


// O(logn)
function binary( arr, target ) {
    let left = 0;
    let right = arr.length - 1;

    while ( left <= right ) {
        let middleIndex = Math.floor((left + right ) /2)
        if ( target === arr[ middleIndex ] ) {
            return middleIndex;
        }

        if ( target < arr[ middleIndex ] ) {
            right = middleIndex -1
        } else {
            left = middleIndex + 1
        }
    }
    return -1;
}

function recursiveBinary( arr, target ) {
    return search( arr, target, 0, arr.length - 1 ) 
}

function search( arr, target, left, right ) {
    if ( left > right ) return -1
    
    let middle = Math.floor( ( left + right ) / 2 )
    if ( target === arr[ middle ] ) return middle
    if ( target < arr[middle] ) {
     return  search(arr, target, left, middle - 1)
    } else {
       return search(arr, target, middle + 1, right)
    }
}

console.log(recursiveBinary([1,2,3,4,5], 5))
console.log(recursiveBinary([1,2,3,4,5], 2))
console.log(recursiveBinary([1,2,3,4,5], 4))
console.log(recursiveBinary([1,2,3,4,5], 9))
console.log(recursiveBinary(['apple', 'banana', 'orange', 'pear'], 'orange'))
console.log(recursiveBinary(['apple', 'banana', 'orange', 'pear'], 'pear'))
console.log(recursiveBinary(['apple', 'banana', 'orange', 'pear'], 'apple'))
console.log(recursiveBinary(['apple', 'banana', 'orange', 'pear'], 'pineapple'))
