package org.demo.management;

import org.demo.utils.CommonUtilities;
import org.demo.view.ErrorClass;
import org.demo.view.OptionsView;
import java.util.Scanner;
/**
 *
 * @author Jaime Verdejo Mart&iacute;
 */
public class MembersManagement {
    public static void members(Scanner input){

        boolean back = false;
        do{
            OptionsView.partnersOptions();

            char option = input.next().charAt(0);
            switch (option){
                case '1':
                    newMember(input);
                    break;
                case '2':
                    //list
                    break;
                case '0':
                    back = true;
                    break;
                default:
                    ErrorClass.incorrectOption(input);
                    break;
            }
        }while (!back);
    }
    public static void newMember(Scanner input){
        System.out.println("\n\t ENTER NEW MEMBER ");
        System.out.println("\t----------------");
        String name = CommonUtilities.ask (input, "Name: ");
        String lastName = CommonUtilities.ask (input, "Last name: ");
        String idCard = CommonUtilities.ask (input, "Id card: ");
        //Member = new member;
    }
}
