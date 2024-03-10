import { useState } from 'react'

export default function Simulation() {
  const [pending, setPending] = useState(100)
  const [walking, setWalking] = useState(0)
  const [completed, setCompleted] = useState(0)
  const [light, setLight] = useState(false)

  function handleTrafficLightClick() {
    setPending((p) => p - 10)
    setWalking((w) => w + 10)
    setLight(true); // Set light to green when walking starts
    setTimeout(() => {
      setWalking((w) => w - 10)
      setCompleted((c) => c + 10)
      setLight(false); // Set light to red when walking is completed
    }, 1000); // Delay for 3000 milliseconds (1 seconds)
  }

  return (
    <>
      <h3 style={{ color: light ? "grey" : "white" }}> Pending: {pending} </h3>
      <h3 style={{ color: light ? "white" : "grey" }}>
        Walking: {walking} {light ? " . . . . ." : ""}
      </h3>
      <h3 style={{ color: light ? "#8A9A5B" : "grey" }}>
        Completed: {completed}
      </h3>
      <button
        className="trafficButton"
        style={{
          backgroundColor: light ? "#8A9A5B" : "#ff5733",
        }}
        onClick={handleTrafficLightClick}
      >
        Taffic Light
      </button>
    </>
  )
}
