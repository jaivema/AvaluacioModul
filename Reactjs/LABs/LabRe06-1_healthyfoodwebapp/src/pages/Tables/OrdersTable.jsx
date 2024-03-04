import "w3-css/w3.css";
import { ordersDataJSON } from "./../ordersDataJSON.js";

export default function OrdersTable() {
  const renderData = ordersDataJSON.map((order) => (
    <>
      <tr>
        <td>{order.id}</td>
        <td>{order.waiter}</td>
        <td> {order.qtyPeople}</td>
        <td>{order.paid ? "yes" : "no"}</td>
        <td>{order.totalPayment}</td>
        <td>{order.date}</td>
        <td>{order.table}</td>
        <td>
          {order.menus.map((menu) => (
            <>
              <span>
                {menu.menu}:{menu.qty},{" "}
              </span>
            </>
          ))}
        </td>
      </tr>
    </>
  ));

  console.log(ordersDataJSON);

  return (
    <>
      <div class="w3-container">
        <h1>Orders Table</h1>

        <table class="w3-table w3-bordered w3-hoverable w3-border">
          <tr class="w3-black">
            <th>id</th>
            <th>waiter</th>
            <th>qty</th>
            <th>paid</th>
            <th>to pay</th>
            <th>date</th>
            <th>table</th>
            <th>menus</th>
          </tr>
          {renderData}
        </table>
      </div>
    </>
  );
}
