// problem: Given a positive integer of 'n', determine if the number is a power of 2


//O(logn)
function powerOf2(n) {

    if ( n < 1 ) return false;
    while ( n > 1 ) {
        if ( n % 2 !== 0 ) {
            return false
        }

        n = n / 2;
    }
    return true

}

//console.log(powerOf2(4))

//O(1)
const bitwisePowerOf2 = ( n ) => {
    
    if ( n < 1 ) return false;

    return ( n & ( n - 1 ) ) === 0;
};

console.log( bitwisePowerOf2( 4 ) );
console.log( bitwisePowerOf2( 7 ) );
console.log( bitwisePowerOf2( 8 ) );
console.log(bitwisePowerOf2(16))