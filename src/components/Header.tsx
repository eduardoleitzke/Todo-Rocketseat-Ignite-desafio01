import styles from './Header.module.css'
import rocketLogo from '../assets/rocket.svg'

export function Header(){
   
    return (
        <header className={styles.header}>
            <img src={rocketLogo} alt="rocket-logo" />
            <p>to<span>do</span></p>
        </header>
    )
}