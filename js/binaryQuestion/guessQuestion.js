// problem statement
// We are playing the Guess Game. The game is as follows:
// I pick a number from 1 to n. You have to guess which number I picked.
// Every time you guess wrong, I'll tell you whether the number is higher or lower.
// You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):

const guess = (n) => {
    if ( n < 5 ) {
        return -1
    } else if ( n > 5 ) {
        return 1
    } else {
        return 0
    }
};


function guessGame( num ) {
    let low = 0;
    let high = num 
    
    while ( low < high ) {
        let mid = Math.round( ( low + high ) / 2 )
        
        if ( guess( mid ) === 0 ) return mid;

        if ( guess( mid ) === -1 ) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return -1
}

console.log(guessGame(10))
console.log(guessGame(12))


console.log(guessGame(5))
console.log(guessGame(3))