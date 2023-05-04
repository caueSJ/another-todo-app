import { ActionButton } from '../../../ActionButton'
import { useAppContext } from '../../../../hooks/useAppContext'
import styles from './ListItem.module.css'
import { api } from '../../../../services/api';

export function ListItem({ name, id }) {
  const { setTasks } = useAppContext();

  async function handlerRemove() {
    await api.delete(`/tasks/${id}`)
    setTasks(tasks => tasks.filter(task => task.id !== id))
  }

  return (
    <li className={styles.item}>
      <strong>{name}</strong>
      <ActionButton onClick={handlerRemove} value="-" />
    </li>
  )
}