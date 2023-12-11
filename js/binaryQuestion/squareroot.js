// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

// O(logN)
function squareRoot( n ) {
   
    let left = 1;
    let right = n-1;

    while ( left <= right ) {
        const midVal = Math.ceil( ( left + right ) / 2 );
        let squared = midVal * midVal
        if ( squared === n ) return midVal;

        if ( squared > n ) {
            right = midVal - 1;
        } else {
            left = midVal + 1;
        }
    }

    if ( ( right * right ) === n ) return right
    
    return left -1


}

console.log(squareRoot(64))
console.log(squareRoot(81))
console.log(squareRoot(4))
console.log(squareRoot(9))
console.log(squareRoot(80))
console.log(squareRoot(145)) 