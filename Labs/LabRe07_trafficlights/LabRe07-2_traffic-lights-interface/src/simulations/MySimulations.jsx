import React, { useContext } from 'react'
import { DataContext } from '../middleware/DataSimulations'

const MySimulations = () => {
  const { simulations, isLoading } = useContext(DataContext)

  return (
    <>
      <h1>Simulations list</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section className="simulations-list">
            {simulations.map((simulation) => (
            <ul key={simulation.id}>
                <li>User: {simulation.name}</li>
                <li>id: {simulation.id}</li>
                <li>Created: {simulation.createdAt}</li>
                <li>Time: {simulation.time}</li>
            </ul>
            ))}
      </section>
      )}
    </>
  )
}

export default MySimulations
