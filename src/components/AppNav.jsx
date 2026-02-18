import styles from './AppNav.module.css'
import PageNav from './PageNav'
function AppNav() {
    return (
        <nav className={styles.nav}>
            <PageNav/>
            App Navigation
        </nav>
    )
}

export default AppNav
