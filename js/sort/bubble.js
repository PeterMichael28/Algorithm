// problem: given an array of integer, sort the array;


// O(n2) - quadratic - nested loop;
function bubble( arr ) {
    let swapped;
    do {
        swapped = false;

        for ( i = 0; i < arr.length - 1; i++ ){
            if ( arr[ i ] > arr[ i + 1 ] ) {
                let temp = arr[ i ];
                arr[ i ] = arr[ i + 1 ];
                arr[ i + 1 ] = temp;
                swapped = true;

            }
        
        }
    } while ( swapped );
    
    return arr;
}

console.log(bubble([2,1,4,3,8,6]))
console.log(bubble([4,2,9,0,6,4]))