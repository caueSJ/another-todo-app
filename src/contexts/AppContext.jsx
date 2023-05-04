import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AppContext = createContext({})

export function AppContextProvider({ children }) {
  const [tasks, setTasks] = useState([])

  useEffect(() => {    
    api.get("/tasks").then((response) => {
      setTasks(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])
  
  return (
    <AppContext.Provider 
      value={{
        tasks,
        setTasks
      }}>
      {children}
    </AppContext.Provider>
  )
}