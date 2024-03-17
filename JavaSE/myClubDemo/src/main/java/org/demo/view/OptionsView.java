package org.demo.view;

/**
 *
 * @author Jaime Verdejo Mart&iacute;
 */
public class OptionsView {
        public static void mainMenu() {
                System.out.println("\n Main Options ");
                System.out.println(" ------------ ");
                System.out.println(" 1. - Partners.");
                System.out.println(" 2. - DVD's. ");
                System.out.println(" 3. - Préstamos. ");
                System.out.println(" 0. - Exit. ");
                System.out.println("             ");
                System.out.print("> Enter an option: ");
        }
        public static void partnersOptions(){
                System.out.println("\n Members Menu ");
                System.out.println(" ------------ ");
                System.out.println(" 1. - New member.");
                System.out.println(" 2. - List of partners.");
                System.out.println(" 0. - Back to main menu. ");
                System.out.println("             ");
                System.out.print("> Enter an option: ");
        }
        public static void dvdOptions(){
                System.out.println("\n DVD Menu ");
        }
}
