import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const DataContext = createContext()

const DataSimulations = ({ children }) => {
  const [simulations, setSimulations] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          "https://65e84d264bb72f0a9c4ee135.mockapi.io/v1/todo"
        );
        setSimulations(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodos()
  }, [])

  return (
    <DataContext.Provider value={{ simulations, isLoading }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataSimulations, DataContext }
