package org.example.repository;

import org.example.model.Menu;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.UUID;

public class MenuRepository {


    private HashMap<String, Menu> menus;
    private int size;
    private int maxSize;
    private String name;
    private String location;


    public MenuRepository() {
        this.menus = new HashMap<String, Menu>();
    }

    public ArrayList<Menu> createFakeMenus (int size){

        return null;

    }

    public void saveMenu(Menu menu){

        String id = UUID.randomUUID().toString();
        menus.put(id, menu);
    }

    public HashMap<String, Menu> getMenus() {
        return menus;
    }

    public void setMenus(HashMap<String, Menu> menus) {
        this.menus = menus;
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
        return "MenuRepository{" +
                "menus=" + menus +
                ", \nsize=" + size +
                ", maxSize=" + maxSize +
                ", name='" + name + '\'' +
                ", location='" + location + '\'' +
                '}';
    }
}
