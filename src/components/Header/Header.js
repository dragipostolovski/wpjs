import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.siteHeader}>
            <h1 className={styles.siteHeader__title}>Projects Engine</h1>
        </header>
    )
}

export default Header;