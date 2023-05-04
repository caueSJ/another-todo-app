import styles from './ActionButton.module.css'

export function ActionButton( {value, onClick, type} ) {
    return (
        <button type={type} onClick={onClick} className={styles.button}>
            {value}
        </button>
    )
}