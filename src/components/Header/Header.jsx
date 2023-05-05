import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <Link to="/" className={styles.homeLink}><h3>vnt<span>/school</span></h3></Link>
                <Link to="/about">About</Link>
            </div>
        </header>
    )
}