// problem, given an integer 'n', find the factorial;

// O(n)
function factorial( n ) {
    let res = 1;
    for ( let i = 2; i <= n; i++ ){
        res= res * i
    }
    return res;
}

// O(n)
function factorialRecursive( n ) {
    if (n < 2) return 1
    return n * factorialRecursive(n-1)
}

