import { useState } from 'react'
import { ActionButton } from '../ActionButton'
import styles from './CreateTask.module.css'
import { useAppContext } from '../../hooks/useAppContext'
import { api } from '../../services/api'

export function CreateTask() {
  const [taskName, setTaskName] = useState("")

  const { setTasks } = useAppContext()

  async function handlerSubmit(event) {
    event.preventDefault()

    if (taskName.length === 0) {
      return
    }

    const { data: newTask } = await api.post("/tasks", {
      name: taskName
    })

    setTasks(prev => [...prev, newTask])

    setTaskName("")
  }

  return (
    <div className={styles.createtask}>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          value={taskName}
          placeholder="Type your next task..."
          maxLength={100}
          onChange={(event) => setTaskName(event.target.value)}
        />
        <ActionButton
          type="submit"
          value="+"
        />
      </form>
    </div>
  )
}