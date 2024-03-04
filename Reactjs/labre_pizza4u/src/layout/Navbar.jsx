import { Link } from 'react-router-dom';

export default function Navbar () {
  return (
    <>
      <nav class="w3-top">
        <div class="w3-black w3-opacity">
          <Link class="w3-bar-item w3-button" to="/">
            <p>Home</p>
          </Link>

          <Link class="w3-bar-item w3-button" to="/menus">
            <p>Menus</p>
          </Link>

          <Link class="w3-bar-item w3-button" to="/orders">
            <p>Orders</p>
          </Link>

          <Link class="w3-bar-item w3-button w3-right" to="/about">
            <p>About</p>
          </Link>
          
          <Link class="w3-bar-item w3-button w3-right" to="/team">
            <p>Team</p>
          </Link>

          <Link class="w3-bar-item w3-button w3-right" to="/tables">
            <p>Tables</p>
          </Link>

          <Link class="w3-bar-item w3-button w3-right" to="/fakeData">
            <p>Fake Data</p>
          </Link>
        </div>
      </nav>
    </>
  );
};

