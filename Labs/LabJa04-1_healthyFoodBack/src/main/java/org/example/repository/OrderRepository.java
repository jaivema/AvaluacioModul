package org.example.repository;

import org.example.model.Menu;
import org.example.model.Order;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.UUID;

public class OrderRepository {

    private HashMap<String, Order> orders;
    private int size;
    private int maxSize;
    private String name;
    private String location;

    public OrderRepository() {

        this.orders = new HashMap<String, Order>();
    }

    public ArrayList<Menu> createFakeMenus (int size){

        return null;

    }

    public void saveOrder(Order order){

        String id = UUID.randomUUID().toString();
        orders.put(id, order);
    }


    public HashMap<String, Order> getOrders() {
        return orders;
    }

    public void setOrders(HashMap<String, Order> orders) {
        this.orders = orders;
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
        return "OrderRepository{" +
                "orders=" + orders +
                ", size=" + size +
                ", maxSize=" + maxSize +
                ", name='" + name + '\'' +
                ", location='" + location + '\'' +
                '}';
    }
}
