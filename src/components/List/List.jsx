import { useAppContext } from '../../hooks/useAppContext'
import { ListItem } from './components/ListItem'
import styles from './List.module.css'

export function List() {
  const { tasks } = useAppContext()

  return (
    <ul className={styles.list}>
      {tasks.length === 0 && (
        <div className={styles.empty_list}>
          Task list is empty...  <br/> Start by adding your first task!          
        </div>
      )}
      {tasks.map((task) => (
        <ListItem key={task.id} name={task.name} id={task.id} />
      ))}
    </ul>
  )
}