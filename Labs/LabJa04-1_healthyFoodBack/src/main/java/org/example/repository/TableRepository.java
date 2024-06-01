package org.example.repository;

import org.example.model.Table;

import java.util.HashMap;
import java.util.UUID;

public class TableRepository {

    private HashMap<String, Table> tables;
    private int size;
    private int maxSize;
    private String name;
    private String location;

    public TableRepository() {
        this.tables =  new HashMap<String, Table>();
    }

    public void saveTable(Table table){

        String id = UUID.randomUUID().toString();
        tables.put(id, table);
    }
    public HashMap<String, Table> getTables() {
        return tables;
    }

    public void setTables(HashMap<String, Table> tables) {
        this.tables = tables;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int getMaxSize() {
        return maxSize;
    }

    public void setMaxSize(int maxSize) {
        this.maxSize = maxSize;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    @Override
    public String toString() {
        return "TableRepository{" +
                "tables=" + tables +
                ", size=" + size +
                ", maxSize=" + maxSize +
                ", name='" + name + '\'' +
                ", location='" + location + '\'' +
                '}';
    }
}
