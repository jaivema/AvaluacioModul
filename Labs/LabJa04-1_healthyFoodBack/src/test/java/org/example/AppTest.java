package org.example;

import static org.junit.Assert.assertTrue;

import com.github.javafaker.Faker;
import org.example.model.Menu;
import org.example.model.Order;
import org.example.model.Table;
import org.junit.Test;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;

/**
 * Unit test for simple App.
 */
public class AppTest 
{
    /**
     * Rigorous Test :-)
     */
    @Test
    public void testMenus()
    {
        Menu menu1 = new Menu("Menu Lisboa", 25.00, "Meat, Salad, Tuna", true, true);
        Menu menu2 = new Menu();
        menu2.isActive();
        menu2.isWater();
        menu2.setContent("Meat, Salad, Fetaccis");
        menu2.setName("Menu New York");
        menu2.setPrice(23.00);


        System.out.println(menu1);
        System.out.println(menu2);

        assertTrue( true )


        ;
    }

    @Test
    public void generalTest(){

        Menu menu1 = new Menu("Menu Lisboa", 25.00, "Meat, Salad, Tuna", true, true);
        menu1 = null;
        Menu menu2 = new Menu();
        menu2.isActive();
        menu2.isWater();
        menu2.setContent("Meat, Salad, Fetaccis");
        menu2.setName("Menu New York");
        menu2.setPrice(23.00);


        System.out.println(menu1);
        System.out.println(menu2);

        HashMap<String, Menu> menusTest = new HashMap<String, Menu>();

        menusTest.put("M001", menu1);
        menusTest.put("M002", menu2);

        System.out.println(menusTest);

        HashMap<String, Table> tables = new HashMap<String, Table>();
        tables.put("T01", new Table("Table1", "Table type Estrella Galicia", 4));
        tables.put("T02", new Table("Table2", "Table type Estrella Galicia", 4));
        tables.put("T03", new Table("Table3", "Table type Estrella Galicia", 2));
        tables.put("T04", new Table("Table4", "Table type Estrella Galicia", 2));

        System.out.println(tables);

        HashMap<String, Order> orders = new HashMap<String, Order>();

        ArrayList<Menu> menusToOrders = new ArrayList<Menu>();

        menusToOrders.add(menusTest.get("M001"));
        menusToOrders.add(menusTest.get("M001"));
        menusToOrders.add(menusTest.get("M001"));
        menusToOrders.add(menusTest.get("M002"));

        orders.put("43F43WT", new Order(new Date(), "Joan", 4,
                60.00, true, tables.get("T01"), menusToOrders ));

        System.out.println(orders);

        Faker faker = new Faker();



        String food1 = faker.food().measurement();
        String food2 = faker.food().dish();
        String food3 = faker.food().sushi();
        String food4 = faker.food().fruit();
        String food5 = faker.food().spice();
        String food6 = faker.food().vegetable();

        Menu menuToTest = new Menu();

        menuToTest.setContent(food6);
        menuToTest.setName("Menu Monday");
        menuToTest.setPrice(52.00);

        System.out.println(menuToTest);
    }
}
