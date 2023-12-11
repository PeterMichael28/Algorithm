package binarySearch;

public class FindTarget {

    static int binaryFindTarget(int[] arr, int k) {

        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int middle = (left + right) / 2;

            if (arr[middle] == k)
                return middle;

            if (arr[middle] < k) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        return -1;
    }

    static int search(int[] arr, int k, int left, int right) {
        if (left > right)
            return -1;

        int middle = (int) (left + right) / 2;

        if (k == arr[middle])
            return middle;

        if (arr[middle] < k) {
            return search(arr, k, middle + 1, right);
        } else {
            return search(arr, k, left, middle - 1);
            }

            
    }
     
    static int recursiveBinaryFindTarget(int[] arr, int k) {
        // base case: when the array is empty or only contains one element
        return search(arr, k, 0, arr.length - 1);

    }
    

    

    public static void main(String[] args) {

        int[] sortedArray = {1, 3, 5, 7, 9, 11, 13, 15};

        // Target value to search for
        int targetValue = 17;

        int res = binaryFindTarget(sortedArray, targetValue);
        int res2 = recursiveBinaryFindTarget(sortedArray, targetValue);
        System.out.println(res);
        System.out.println(res2);
    }
}
