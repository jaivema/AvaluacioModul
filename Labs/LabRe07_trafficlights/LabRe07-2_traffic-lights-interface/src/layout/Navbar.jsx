import React from 'react'
import Simulation from '../simulation/Simulation'
import MySimulations from '../simulations/MySimulations'

function Navbar() {
  const [state, setState] = React.useState({
    showSimulation: true,
    showMySimulations: false,
  })

  const handleClick = (key) => {
    setState((prevState) => ({
      ...prevState,
      showSimulation: key === "showSimulation",
      showMySimulations: key === "showMySimulations",
    }))
  }

  return (
    <div>
      <div className="navbar">
        <button
          className="button"
          onClick={() => handleClick("showSimulation")}
        >
          Simulation
        </button>
        <button
          className="button"
          onClick={() => handleClick("showMySimulations")}
        >
          My Simulations
        </button>
      </div>
      <div className="container">
        {state.showSimulation && <Simulation />}
        {state.showMySimulations && <MySimulations />}
      </div>
    </div>
  );
}

export default Navbar
