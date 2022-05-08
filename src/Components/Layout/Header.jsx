import sushi_image from '../../assets/sushi.jpg'
import styles from './Header.module.css'
import HeaderCartButton from "../Cart/HeaderCartButton";

const Header = (props) => {
    return <>
        <header className={styles.header}>
        <h1>Ресторан суши</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={styles['main-image']}>
            <img src={sushi_image} alt="sushi"/>
        </div>
    </>
}

export default Header