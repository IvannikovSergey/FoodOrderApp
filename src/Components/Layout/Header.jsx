import sushi_image from '../../assets/sushi.jpg'
import styles from './Header.module.css'
import HeaderCartButton from "../Cart/HeaderCartButton";

const Header = () => {
    return <>
        <header className={styles.header}>
        <h1>Ресторан суши</h1>
            <HeaderCartButton/>
        </header>
        <div className={styles['main-image']}>
            <img src={sushi_image} alt="sushi"/>
        </div>
    </>
}

export default Header