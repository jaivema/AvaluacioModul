import React, { useState, useEffect } from "react";

const CreateOrders = () => {
  const [orders, setOrders] = useState([]);

  const menuNames = [
    "Barcelona",
    "New York",
    "Bristol",
    "Lisbon",
    "Berlin",
    "Paris",
    "Moscova",
    "Girona",
    "Santiago",
    "Lima",
    "Tokyo",
  ];

  const getRandomDate = () => {
    const startDate = new Date(2020, 0, 1);
    const endDate = new Date();
    const randomTime =
      startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime());
    return new Date(randomTime).toLocaleDateString("en-GB");
  };

  const getRandomWaiter = () => {
    const waiters = [
      "John",
      "Gala",
      "Moira",
      "Dustin",
      "Joan",
      "Pere",
      "Mireia",
      "Svetlana",
    ];
    return waiters[Math.floor(Math.random() * waiters.length)];
  };

  const getRandomBoolean = () => Math.random() < 0.98; // 98% chance of being true

  const getRandomTable = () => `table${Math.floor(Math.random() * 12) + 1}`;

  const getRandomQuantityPeople = () => Math.floor(Math.random() * 11) + 2;

  const getRandomTotalPayment = () =>
    parseFloat((8 + Math.random() * (120 - 8)).toFixed(2));

  const getRandomMenu = (remainingQty) => {
    const maxQty = Math.min(remainingQty, 12);
    const qty = Math.floor(Math.random() * maxQty) + 1;
    return {
      menu: menuNames[Math.floor(Math.random() * menuNames.length)],
      qty,
    };
  };

  const generateOrder = () => {
    const totalMenus = 12;
    let remainingQty = totalMenus;

    const menus = Array.from(
      { length: Math.floor(Math.random() * 10) + 1 },
      () => {
        const menu = getRandomMenu(remainingQty);
        remainingQty -= menu.qty;
        return menu;
      }
    );

    return {
      id: `O${Math.floor(Math.random() * 999) + 1}`,
      date: getRandomDate(),
      waiter: getRandomWaiter(),
      qtyPeople: getRandomQuantityPeople(),
      totalPayment: getRandomTotalPayment(),
      paid: getRandomBoolean(),
      table: getRandomTable(),
      menus,
    };
  };

  useEffect(() => {
    const generatedOrders = Array.from({ length: 500 }, generateOrder);
    setOrders(generatedOrders);
  }, []);

  return (
    <div>
      <h5>0.5K fake 'orders'</h5>
      <pre>{JSON.stringify(orders, null, 2)}</pre>
    </div>
  );
};

export default CreateOrders;
