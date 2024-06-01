package org.example.manager;

import org.example.model.Table;
import org.example.repository.MenuRepository;
import org.example.utils.CommonUtilities;
import org.example.repository.TableRepository;

import java.util.Scanner;

public class TableManager {

    public static void createTable(Scanner scanner, TableRepository tableDB) {

        System.out.println("\nWelcome to CREATE Table");
        Table table = new Table();

        String name = CommonUtilities.ask(scanner, "Table name number");
        String description = CommonUtilities.ask(scanner, "Table description");
        table.setDescription(description);
        table.setName(name);
        table.setBusy(false);

        tableDB.saveTable(table);


    }

    public static TableRepository createDB (){
        TableRepository tableRepoDB = new TableRepository();
        tableRepoDB.setLocation("Paris");
        tableRepoDB.setMaxSize(1000);
        tableRepoDB.setName("db of tables healthyFood");
        return tableRepoDB;
    }


    public static void createFakeTables(TableRepository tableRepoDB) {

        Table table1 = new Table();
        table1.setBusy(false);
        table1.setQty(4);
        table1.setName("t#1");
        table1.setDescription("from coca-cola");

        Table table2 = new Table();
        table2.setBusy(false);
        table2.setQty(4);
        table2.setName("t#2");
        table2.setDescription("from coca-cola");

        Table table3 = new Table();
        table3.setBusy(false);
        table3.setQty(8);
        table3.setName("t#3");
        table3.setDescription("from coca-cola");

        tableRepoDB.saveTable(table1);
        tableRepoDB.saveTable(table2);
        tableRepoDB.saveTable(table3);

    }
}
