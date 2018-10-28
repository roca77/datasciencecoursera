import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        double square;
        double root;
        double angle;
        double height;

        Scanner in = new Scanner(System.in);

        System.out.print("What is the number you want to work with? ");
        square = in.nextInt();

        root = Math.sqrt(square);

        System.out.println("The square root of " + square + " is " + root);

    }
}