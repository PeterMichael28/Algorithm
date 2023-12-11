// problem: give a number 'n', find the first 'n' elements of the fibonacci sequence.
// a fibonacci sequence is a series of number which each number is a sum of the two preceding numbers

// O(n) - linear
function fibonacci( n ) {
    
    let res = [0, 1];

    for ( let i = 2; i < n; i++ ) {
        res[i] = res[i -1] + res[i-2]
    }
    
    return res;
}

 console.log(fibonacci(5))
//recursion
//O(2^n)
function fibonacciRecursiveArray(n) {
    if (n <= 2) return [0, 1];
  
    const res = fibonacciRecursiveArray(n - 1);
    res.push(res[res.length - 1] + res[res.length - 2]);

    return res
  }



console.log(fibonacciRecursiveArray(1))