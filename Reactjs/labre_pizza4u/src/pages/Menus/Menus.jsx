import OrderButton from "./OrderButton.jsx";
import MenuFromData from "./MenuFromData.jsx";

const menus = [
  {
    id: "M001",
    name: "Margherita",
    contents: [
      "fresh tomatoes",
      "fresh mozzarella",
      "fresh basil",
    ],
    price: 12.50,
    active: true,
    water: true,
  },
  {
    id: "M002",
    name: "Formaggio",
    contents: [
      "four cheeses",
      "mozzarella",
      "parmesan",
      "pecorino",
      "jarlsberg",
    ],
    price: 15.50,
    active: true,
    water: true,
  },
  {
    id: "M003",
    name: "Chicken",
    contents: [
      "fresh tomatoes",
      "mozzarella",
      "chicken",
      "onions",
    ],
    price: 17.0,
    active: true,
    water: true,
  },
];


export default function Menus (){
    return (
      <>
        <div class="w3-container w3-card">
          <MenuFromData menu={menus[1]} />    
          <OrderButton />
        </div>
        <div class="w3-container w3-card">
          <MenuFromData menu={menus[2]} />
          <OrderButton />
        </div>
        
      </>
    );
}