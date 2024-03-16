package org.demo.controller;
import org.demo.management.MembersManagement;
import org.demo.view.ErrorClass;
import org.demo.view.OptionsView;

import java.util.Scanner;
/**
 *
 * @author Jaime Verdejo Mart&iacute;
 */
public class MenuController {

    public static void start(){
        Scanner input = new Scanner(System.in);

        boolean exit = false;
        do{
            OptionsView.mainMenu();

            char option = input.next().charAt(0);
            switch (option){
                case '1':
                    MembersManagement.members(input);
                    break;
                case '2':
                    //dvd manager
                    break;
                case '3':
                    //prestamos manager
                    break;
                case '0':
                    exit = true;
                    break;
                default:
                    ErrorClass.incorrectOption(input);
                    break;
            }
        }while (!exit);
    }
}
