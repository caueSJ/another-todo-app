import styles from './ActionButton.module.css'

export function ActionButton( {value, onClick, type, color} ) {
    return (
        <button type={type} onClick={onClick} className={`${styles.button} ${styles[color]}`}>
            {value}
        </button>
    )
}