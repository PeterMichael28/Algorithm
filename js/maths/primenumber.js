// problem: given a natural number 'n', determine if the number is a prime number or not;

// prime number is a natural numbers greater than 1 and that can only be divided by 1 and itself
// O(n)
function prime( n ) {
    
    if ( n < 2 ) return false

    for ( let i = 2; i < n; i++ ) {
        if (n % i === 0) {
            return false;
        }
    }
    return true
}

// console.log( prime( 11 ) );



// optimized prime
// O(sqrt(n))
function prime2( n ) {
     
    if ( n < 2 ) return false

    for ( let i = 2; i <= Math.sqrt(n); i++ ) {
        if (n % i === 0) {
            return false;
        }
    }
    return true
}

console.log( prime( 10 ) );
console.log( prime( 11 ) );
console.log( prime( 9 ) );
console.log( prime( 8 ) );
console.log( prime( 4 ) );