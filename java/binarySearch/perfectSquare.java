package binarySearch;


 // question : Given a positive integer num, write a function which returns True if num is a perfect square else False.
public class perfectSquare {
    

    static boolean perfectSqr(int n) {

        int left = 1;
        int right = n;

        if (left > right)
            return false;

        while (left <= right) {

            int middle = (int) (left + right) / 2;

            if ((middle * middle) == n)
                return true;

            if ((middle * middle) < n) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        return false;

    }
    
    public static void main(String[] args) {
        System.out.println(perfectSqr(64));
System.out.println(perfectSqr(81));
System.out.println(perfectSqr(4));
System.out.println(perfectSqr(7));
System.out.println(perfectSqr(235));
System.out.println(perfectSqr(124));
    }
}
