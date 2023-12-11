
 class Factorial {

     public int factorial(int n) {

         int res = 1;
         for (int i = 2; i <= n; i++) {
             res = res * i;
         }

         return res;
     }
    
     public int recursiveFactorial(int n) {
         if (n < 2)
             return 1;

         return n * recursiveFactorial(n - 1);
     }
        
     


    public static void main(String[] args) {

        Factorial MathObj = new Factorial();
     
      System.err.println(MathObj.factorial(3));  
      System.err.println(MathObj.recursiveFactorial(3));  
      System.err.println(MathObj.factorial(4));  
      System.err.println(MathObj.recursiveFactorial(4));  
    }
}
