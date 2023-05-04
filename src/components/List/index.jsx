import { useAppContext } from '../../hooks/useAppContext'
import { ListItem } from './components/ListItem'
import styles from './List.module.css'

export function List() {
  const { tasks } = useAppContext()

  return (
    <ul className={styles.list}>
      {tasks.lenght === 0 && 'No tasks created'}
      {tasks.map((task) => (
        <ListItem key={task.id} name={task.name} id={task.id} />
      ))}
    </ul>
  )
}