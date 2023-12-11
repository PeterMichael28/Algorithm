// Given two integer arrays A[] and B[] of size m and n, respectively. We need to find the intersection of these two arrays. The intersection of two arrays is a list of distinct numbers which are present in both the arrays. The numbers in the intersection can be in any order.



function binary( n, k ) {
    let left = 0;
    let right = n.length - 1;

    while ( left <= right ) {
        let mid = Math.floor( ( left + right ) / 2 )
        
        if ( k === n[ mid ] ) {
            return true;
        } else if ( n[ mid ] < k ) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

    }

    return false;
}


// O(nlogn) 
function intersection( a, b ) {
    let res = [];

    a.sort( ( a, b ) => a - b );
    
    for ( let i = 0; i < b.length; i++ ) {
        if ( binary( a, b[ i ] ) ) {
            res.push( b[ i ] );
        }
    }

    return res;
}

let a = [ 1, 4, 3, 2, 5, 8, 9, 7 ];
let b = [ 6, 3, 2, 7, 5 ];

console.log(intersection(a, b))