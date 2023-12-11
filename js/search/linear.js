// problem :given an array of 'n' elements and a target element 't', find the index of t in the array, return -1 if the target element is not found

// linear search start with the first element and moc=ve towrads the last



// O(n)
function linear(arr, target ) {
    
    for ( let i = 0; i < arr.length; i++ ) {
        if( arr[ i ] === target) return i
        
    }
    return -1
}

console.log(linear([1,2,3,4,5], 5))
console.log(linear([1,2,3,4,5], 2))
console.log(linear([1,2,3,4,5], 4))
console.log(linear([1,2,3,4,5], 9))