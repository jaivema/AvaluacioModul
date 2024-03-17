package org.demo.view;

import java.util.Scanner;
/**
 *
 * @author Jaime Verdejo Mart&iacute;
 */
public class ErrorClass {
    public static void incorrectOption(Scanner input){
        System.out.println("An incorrect option has been entered.");

        input.nextLine(); //clear buffer System.in

        System.out.println("\n\tPress any to continue...");
        input.nextLine();
    }
}
