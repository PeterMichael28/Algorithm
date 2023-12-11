package binarySearch;

public class Squareroot {
    
    static int sqrt(int n) {

        int left = 1;
        int right = n - 1;

        while (left <= right) {

            int middle = (int) (left + right) / 2;
            int squaredMiddle = middle * middle;
            if (squaredMiddle == n)
                return middle;

            if (n < squaredMiddle) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }

        }

        if ((right * right) == n)
            return right;

        return left - 1;
    }



    public static void main(String[] args) {
        System.out.println(sqrt(64));
System.out.println(sqrt(81));
System.out.println(sqrt(4));
System.out.println(sqrt(9));
System.out.println(sqrt(80));
System.out.println(sqrt(145)) ;
    }


}
