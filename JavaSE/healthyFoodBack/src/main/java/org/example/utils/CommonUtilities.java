package org.example.utils;

import org.example.manager.MenuManager;
import org.example.manager.TableManager;
import org.example.repository.MenuRepository;
import org.example.repository.TableRepository;


import java.util.Scanner;

public class CommonUtilities {

    public static String ask(Scanner scanner, String textToAsk) {

        System.out.println(textToAsk);
        return scanner.nextLine();
    }

    public static void createFakeData(MenuRepository menuRepoDB, TableRepository tableRepoDB) {

        MenuManager.createFakeMenus(menuRepoDB);
        TableManager.createFakeTables(tableRepoDB);


    }
}
