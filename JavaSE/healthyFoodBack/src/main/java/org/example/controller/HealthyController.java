package org.example.controller;

import org.example.manager.TableManager;
import org.example.manager.MenuManager;
import org.example.manager.OrderManager;
import org.example.repository.OrderRepository;
import org.example.utils.CommonUtilities;
import org.example.repository.MenuRepository;
import org.example.repository.TableRepository;
import org.example.view.MenuOptions;


import javax.swing.text.Utilities;
import java.util.Scanner;

public class HealthyController {
    // this method will start the app
    // it is core, here you will find the main loop
    public static void  start(){
        // create core objects
        // the app will use them very often
        Scanner scanner = new Scanner(System.in);

        // fake repo creation for menus, tables and orders
        // by calling the static method
        MenuRepository menuRepoDB = MenuManager.createDB();
        TableRepository tableRepoDB = TableManager.createDB();
        OrderRepository orderRepoDB = OrderManager.createDB();


        CommonUtilities.createFakeData(menuRepoDB, tableRepoDB);


        // main loop controller with options
        while(true){

            MenuOptions.mainMenu();
            String option = CommonUtilities.ask(scanner, "Option? ");

            if (option.equals("1")) {
                // i/o with user to save object
                // ask, create and save
                // call the method with the objects to i/o and save date
                MenuManager.createMenu(scanner, menuRepoDB);

            } else if (option.equals("2")){
                //listMenus();
                System.out.println(menuRepoDB);
            } else if (option.equals("6")){
                TableManager.createTable(scanner, tableRepoDB);
            } else if (option.equals("7")){
                //listTables();
                System.out.println(tableRepoDB);
            } else if (option.equals("10")){
                //listTables();
               OrderManager.createOrder(scanner, orderRepoDB, tableRepoDB, menuRepoDB);
            } else if (option.equals("11")){
                //listTables();
                System.out.println(orderRepoDB);
            } else if (option.equals("0")){ break; }
        }
    }

}
