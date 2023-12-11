// problem: given an array of integer, sort the array;



function insertion( arr ) {
    for ( let i = 1; i < arr.length; i++ ){
        let numberToInsert = arr[ i ];

        let j = i - 1
        while ( j >= 0 && arr[ j ] > numberToInsert ) {
            
            arr[j + 1] = arr[j]
            j = j-1
        }

        arr[j+1] = numberToInsert
    }

    return arr
}


console.log(insertion([2,1,4,3,8,6]))
console.log(insertion([4,2,9,0,6,4]))