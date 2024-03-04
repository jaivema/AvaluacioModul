import "w3-css/w3.css";
import React, { useState } from "react";


  const currentOrderInit = {
    orderId: "order#0",
    date: "",
    waiter: "",
    table: "",
    qtyPeople: 0,
    menusSelected: [0, 0, 0],
  };


export default function CreateOrder() {


  const [currentOrder, setCurrentOrder] = useState(currentOrderInit);
  const [orderId, setOrderId] = useState('');
  const [selectedWaiter, setSelectedWaiter] = useState("");
  const [selectedTable, setSelectedTable] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [menu1Quantity, setMenu1Quantity] = useState('');
  const [menu2Quantity, setMenu2Quantity] = useState('');
  const [menu3Quantity, setMenu3Quantity] = useState('');
  const [orderDate, setOrderDate] = useState("");

  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
  };

   const handleWaiterChange = (event) => {
     setSelectedWaiter(event.target.value);
   };

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(event.target.value);
  };

  const handleMenu1QuantityChange = (event) => {
    setMenu1Quantity(event.target.value);
  };

  const handleMenu2QuantityChange = (event) => {
    setMenu2Quantity(event.target.value);
  };

  const handleMenu3QuantityChange = (event) => {
    setMenu3Quantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Generate a simple unique order ID (for demonstration purposes)
    const newOrderId = `Order${Math.floor(Math.random() * 10000)}`;
    setOrderId(newOrderId);

    // Set the order date to the current date and time
    const currentDate = new Date();
    const currentDateString = currentDate.toISOString();
    setOrderDate(currentDateString);

    //console.log("Date:", currentDateString);

    setCurrentOrder( {
      "orderId": newOrderId,
      "date": currentDateString,
      "waiter": selectedWaiter,
      "table": selectedTable,
      "qtyPeople": numberOfPeople,
      "menusSelected": [menu1Quantity,
      menu2Quantity,
      menu3Quantity]
    });

    // Process the order or send it to a server
    console.log("Order Submitted:", {
      orderId: newOrderId,
      date: currentDateString,
      waiter: selectedWaiter,
      table: selectedTable,
      qtyPeople: numberOfPeople,
      menusSelected: menu1Quantity,
      menu2Quantity,
      menu3Quantity,
    });



    // Clear form fields for the next order
    setOrderId("");
    setSelectedTable("");
    setSelectedWaiter("");
    setNumberOfPeople("");
    setMenu1Quantity("");
    setMenu2Quantity("");
    setMenu3Quantity("");
    setOrderDate("");
  };

  return (
    <>
      <h2>Create an Order</h2>
      <div class="w3-container">
        <div class="w3-row">
          <div class="w3-col m6">
            <div class="w3-panel w3-card-4 w3-sand">
              <h1>Order</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <s>
                    <label>Order ID:</label>
                    <span>{orderId}</span>
                  </s>
                </div>
                <div>
                  <label>Select Waiter:</label>
                  <select value={selectedWaiter} onChange={handleWaiterChange}>
                    <option value="">Select a waiter</option>
                    <option value="waiter1">George</option>
                    <option value="waiter2">Paul</option>
                    <option value="waiter3">Ringo</option>
                    <option value="waiter4">John</option>
                  </select>
                </div>
                <div>
                  <label>Select Table:</label>
                  <select value={selectedTable} onChange={handleTableChange}>
                    <option value="">Select a Table</option>
                    <option value="table1">Table 1</option>
                    <option value="table2">Table 2</option>
                    <option value="table3">Table 3</option>
                  </select>
                </div>
                <div>
                  <label>Number of People:</label>
                  <input
                    type="number"
                    value={numberOfPeople}
                    onChange={handleNumberOfPeopleChange}
                  />
                </div>
                <div>
                  <label>Menu 1 Quantity:</label>
                  <input
                    type="number"
                    value={menu1Quantity}
                    onChange={handleMenu1QuantityChange}
                  />
                </div>
                <div>
                  <label>Menu 2 Quantity:</label>
                  <input
                    type="number"
                    value={menu2Quantity}
                    onChange={handleMenu2QuantityChange}
                  />
                </div>
                <div>
                  <label>Menu 3 Quantity:</label>
                  <input
                    type="number"
                    value={menu3Quantity}
                    onChange={handleMenu3QuantityChange}
                  />
                </div>
                <div>
                  <s>
                    <label>Order Date:</label>
                    <span>{orderDate}</span>
                  </s>
                </div>
                <br />
                <button class="w3-button w3-pink" type="submit">
                  Submit Order
                </button>
              </form>
              <br />
            </div>
          </div>

          <div class="w3-col m6">
            <div class="w3-container">
              {/* Display individual properties of currentOrder */}
              <div class="w3-panel w3-display-container">
                <span
                  onclick="this.parentElement.style.display='none'"
                  class="w3-button w3-large w3-display-topright"
                >
                  &times;
                </span>

                <div>
                  <h3>Current submitted order</h3>
                </div>

                <div>
                  <strong>Order ID:</strong> {currentOrder.orderId}
                </div>
                <div>
                  <strong>Date:</strong> {currentOrder.date}
                </div>
                <div>
                  <strong>Waiter:</strong> {currentOrder.waiter}
                </div>
                <div>
                  <strong>Table:</strong> {currentOrder.table}
                </div>
                <div>
                  <strong>Number of People:</strong> {currentOrder.qtyPeople}
                </div>
                <div>
                  <strong>Menus Selected:</strong>{" "}
                  {currentOrder.menusSelected.join(", ")}
                </div><br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


