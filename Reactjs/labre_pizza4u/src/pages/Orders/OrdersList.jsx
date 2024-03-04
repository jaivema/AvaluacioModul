import "w3-css/w3.css";
import { ordersDataJSON } from "./../ordersDataJSON.js";

export default function OrdersList() {
  const renderData = ordersDataJSON.map((order) => (
    <>
      <div class="w3-card-4" style={{ width: "50%" }}>
        <header class="w3-container w3-sand">
          <h3>Id: {order.id}</h3>
        </header>
        <br />
        <div class="w3-container">
          Waiter: {order.waiter}, qtyPeople: {order.qtyPeople}, To pay:{" "}
          {order.paid ? " ✔" : "X"} {order.totalPayment} $
        </div>
        <div class="w3-container">Date: {order.date}</div>
        <div class="w3-container">Table: {order.table}</div>
        <div class="w3-container">Menus:<br/>
         {order.menus.map ( (menu) => ( <><span>{menu.menu}:{menu.qty}, </span></>))  }</div>
        <br />
        <footer class="w3-container w3-black">
          <h5>Pizza Restaurant 4U</h5>
        </footer>
      </div>
      <br />
    </>
  ));

  //console.log(ordersDataJSON);
  //console.log("renderdata", renderData);

  return (
    <>
      <div class="w3-container">
        <h1>Orders List</h1>
        <div class="w3-container">{renderData}</div>
      </div>
    </>
  );
}
