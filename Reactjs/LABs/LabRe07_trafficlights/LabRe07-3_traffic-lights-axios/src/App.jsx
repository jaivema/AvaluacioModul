import React from "react"
import Navbar from "./layout/Navbar"
import { DataSimulations } from './middleware/DataSimulations'
import "./App.css"

const App = () => {
  
  return (
    <DataSimulations>
      <Navbar />
    </DataSimulations>
  )
}

export default App