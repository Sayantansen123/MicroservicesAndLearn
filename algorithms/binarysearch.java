import java.util.Scanner;


class binarysearch {
    public static void main(String[] args) {
        
        // Input area
        Scanner sc = new Scanner(System.in);
     
        System.out.println("Enter the length of the array:");
        int arrayLength = sc.nextInt();
        int[] numbers = new int[arrayLength];
        
        System.out.println("Enter the sorted array elements:");
        for (int i = 0; i < arrayLength; i++) {
            numbers[i] = sc.nextInt();
        }

        System.out.println("Enter the number to search:");
        int searchNumber = sc.nextInt();

        // Binary search
        int start = 0;
        int end = arrayLength - 1;
        
        while (start <= end) { // Corrected condition
            int mid = start + (end - start) / 2; // Avoids overflow
            
            if (numbers[mid] == searchNumber) {
                System.out.println("Number found at index: " + mid);
                return;
            } else if (searchNumber > numbers[mid]) {
                start = mid + 1; // Move to the right half
            } else {
                end = mid - 1; // Move to the left half
            }
        }

        System.err.println("Number not found");
    }
}
