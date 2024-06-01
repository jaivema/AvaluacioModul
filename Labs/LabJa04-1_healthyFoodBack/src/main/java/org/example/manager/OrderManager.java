package org.example.manager;

import org.example.model.Menu;
import org.example.model.Order;
import org.example.repository.MenuRepository;
import org.example.repository.OrderRepository;
import org.example.repository.TableRepository;
import org.example.utils.CommonUtilities;

import java.util.ArrayList;
import java.util.Date;
import java.util.Scanner;
import java.util.concurrent.atomic.AtomicInteger;

public class OrderManager {


    public static OrderRepository createDB (){
        OrderRepository orderRepoDB = new OrderRepository();
        orderRepoDB.setLocation("Paris");
        orderRepoDB.setMaxSize(1000);
        orderRepoDB.setName("db of orders healthyFood");
        return orderRepoDB;
    }

    public static void createOrder(Scanner scanner,
                                   OrderRepository orderRepoDB,
                                   TableRepository tableRepoDB,
                                   MenuRepository menuRepoDB){
        // create object
        Order order1 = new Order();

        // create date
        Date date = new Date();
        order1.setDate(date);

        // create waiter
        String waiter = CommonUtilities.ask(scanner, "Waiter? ");

        // people qty
        String qty = CommonUtilities.ask(scanner, "People qty? ");
        try{
            int qtyInt = Integer.parseInt(qty);
            order1.setPeopleQty(qtyInt);
        }
        catch (NumberFormatException ex){
            ex.printStackTrace();
        }

        // create table
        System.out.println("\nSelect table:");
        System.out.println("0 - Take Away");
        tableRepoDB.getTables().forEach((key, table) -> {
            // if table is not busy if (table.getName() == false)
            System.out.println( key + " - "+ table.getName());
        });
        String tableSelection = CommonUtilities.ask(scanner, "Table? ");

        if (tableSelection.equals("0")) order1.setTable(null);
        else
            order1.setTable(tableRepoDB.getTables().get(tableSelection));


        // create menus
        System.out.println("\nSelect menus:");
        ArrayList<Menu> menus = new ArrayList();
        while(true) {

            System.out.println("0 - Quit");
            menuRepoDB.getMenus().forEach((key, menu) -> {
                // if menu is active
                System.out.println( key + " - " + menu.getName());
            });

            String option = CommonUtilities.ask(scanner, "Menu? ");
            if (option.equals("0")){ break; }
            else {
                menus.add(menuRepoDB.getMenus().get(option));
            }

        }
        order1.setMenus(menus);


        // total payment
        double totalPayment = 0.0;
        for(Menu menu : menus) {
            totalPayment = totalPayment + menu.getPrice();
        }
        order1.setTotalPayment(totalPayment);

        // create paid
        order1.setPaid(false);

        // saver order to repo
        orderRepoDB.saveOrder(order1);

        System.out.println("\nOrder");
        System.out.println(order1);






    }

}
