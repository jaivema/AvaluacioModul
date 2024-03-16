package org.demo.utils;

import java.util.Scanner;
/**
 *
 * @author Jaime Verdejo Mart&iacute;
 */
public class CommonUtilities {
    public static String ask(Scanner input, String text) {

        System.out.print(text);

        return input.next();
    }
}
