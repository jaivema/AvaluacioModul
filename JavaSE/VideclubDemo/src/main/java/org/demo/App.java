package org.demo;

import org.demo.controller.MenuController;
/**
 *
 * @author Jaime Verdejo Mart&iacute;
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println("*************************");
        System.out.println("**** A Videoclub Demo ***");
        System.out.println("*************************");

        MenuController.start();

        System.out.println( " Finished system " );
    }
}
