import styles from './AboutPage.module.css'

export function AboutPage() {
    return (
        <div className={styles.aboutPage}>
            <h1>About Project</h1>
            <p>This project was developed during the React path, offered by <a target="_blank" href="https://www.venturus.org.br/en/vnt-school/">vnt/school</a>.</p>

            <div>
                <h3>Technologies Used:</h3>
                <ul>
                    <li>React.js</li>
                    <li>Vite.js</li>
                    <li>CSS Modules</li>
                </ul>
            </div>

            <div>
                <h3>Deploy Services/Plataforms:</h3>
                <ul>
                    <li>Vercel</li>
                    <li>Render</li>
                </ul>
            </div>            
        </div>
    )
}