// question : Given a positive integer num, write a function which returns True if num is a perfect square else False.

// O(logN)
function perfectSquare( n ) {
   
    let left = 1;
    let right = n-1;

    while ( left <= right ) {
        const midVal = Math.ceil( ( left + right ) / 2 );
        let squared = midVal * midVal
        if ( squared === n ) return true;

        if ( squared > n ) {
            right = midVal - 1;
        } else {
            left = midVal + 1;
        }
    }

    if ( ( right * right ) === n ) return true
    
    return false


}

console.log(perfectSquare(64))
console.log(perfectSquare(81))
console.log(perfectSquare(4))
console.log(perfectSquare(9))
console.log(perfectSquare(225))
console.log(perfectSquare(144)) 