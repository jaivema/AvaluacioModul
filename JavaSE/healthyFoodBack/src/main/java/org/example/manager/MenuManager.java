package org.example.manager;

import org.example.model.Menu;
import org.example.utils.CommonUtilities;
import org.example.repository.MenuRepository;

import java.util.Scanner;

public class MenuManager {

    public static void createMenu (Scanner scanner, MenuRepository menuDB_toCreateAndSave){

        System.out.println("\nWelcome to CREATE Menu");
        Menu menu = new Menu();
        String name = CommonUtilities.ask (scanner, "Menu name? ");

        menu.setName(name);

        menuDB_toCreateAndSave.saveMenu(menu);

    }

    // create menu repo
    public static MenuRepository createDB (){
        MenuRepository menuRepoDB = new MenuRepository();
        menuRepoDB.setLocation("Paris");
        menuRepoDB.setMaxSize(1000);
        menuRepoDB.setName("db of menus healthyFood");
        return menuRepoDB;
    }

    public static void deleteMenu (){

    }

    public static void createFakeMenus (MenuRepository menuRepoDB) {

        Menu menu1 = new Menu();
        menu1.setName("Lisboa");
        menu1.setWater(false);
        menu1.setPrice(10.00);
        menu1.setActive(true);

        Menu menu2 = new Menu();
        menu2.setName("New York");
        menu2.setWater(false);
        menu2.setPrice(12.00);
        menu2.setActive(true);

        menuRepoDB.saveMenu(menu1);
        menuRepoDB.saveMenu(menu2);

    }

}
