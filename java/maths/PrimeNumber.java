public class PrimeNumber {
    

    static boolean primeNum(int n) {
        if (n < 2)
            return false;

        for (int i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
    
    // O(logn)
    static boolean primeNum2(int n) {
        if (n < 2)
            return false;

        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            } 
        }
        return true;
    }
    
    public static void main(String[] args) {
        System.out.println(primeNum2(11));
        System.out.println(primeNum2(9));
        System.out.println(primeNum2(8));
        System.out.println(primeNum2(4));
    }
}
