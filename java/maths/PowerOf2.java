public class PowerOf2 {

    // O(logn)
    static boolean power(int n) {

        if (n < 1)
            return false;

        while (n > 1) {
            if (n % 2 != 0)
                return false;
            n = n / 2;
        }

        return true;
    }
// O(1)
    static boolean bitwisePowerOf2(int n) {
        if (n < 1)
            return false;

        return (n & (n - 1)) == 0;
        
    }
    
    public static void main(String[] args) {
        System.out.println( bitwisePowerOf2( 4 ) );
        System.out.println( bitwisePowerOf2( 7 ) );
        System.out.println( bitwisePowerOf2( 8 ) );
        System.out.println(bitwisePowerOf2(1));
    }
}
