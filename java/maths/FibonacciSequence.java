// problem: give a number 'n', find the first 'n' elements of the fibonacci sequence.
// a fibonacci sequence is a series of number which each number is a sum of the two preceding numbers

import java.util.ArrayList;
import java.util.List;

public class FibonacciSequence {
    

    // O(n)
    static List<Integer> fib(int n) {
        List<Integer> result = new ArrayList<Integer>();
        result.add(0);
        result.add(1);

        for (int i = 2; i < n; i++) {
            result.add(result.get(result.size() - 1) + result.get(result.size() - 2));
        }

        return result;
    }


    // O(2^n)
    static List<Integer> recursiveFib(int n) {
        if (n <= 2) {
            List<Integer> result = new ArrayList<Integer>();
            result.add(0);
            result.add(1);

            return result;
        }
        List<Integer> result = recursiveFib(n - 1);
      
        result.add(result.get(result.size() - 1) + result.get(result.size() - 2));
        return result;
    }
    
    public static void main(String[] args) {
       
         System.err.println(fib(3));
         System.err.println(recursiveFib(3));
         System.err.println(fib(7));
         System.err.println(recursiveFib(7));
        // System.err.println(fibObj.fib(5));
        // System.err.println(fibObj.fib(7));
    }
}
