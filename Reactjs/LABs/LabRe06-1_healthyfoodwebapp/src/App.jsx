
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Menus from "./pages/Menus/Menus";
import Tables from "./pages/Tables/Tables";
import Orders from "./pages/Orders/Orders";
import Team from "./pages/Team/Team";
import FakeData from "./pages/FakeData/FakeData";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="orders" element={<Orders />} />
          <Route path="menus" element={<Menus />} />
          <Route path="tables" element={<Tables />} />
          <Route path="fakeData" element={<FakeData />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
