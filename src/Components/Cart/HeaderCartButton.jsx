import styles from './HeaderCartButton.module.css'
import CartIcon from "./CartIcon";

const HeaderCartButton = (props) => {
    return <button className={styles.button} onClick={props.onClick} >
        <span className={styles.icon}><CartIcon/></span>
        <span>Корзина</span>
        <span className={styles.badge}>2</span>
    </button>
}

export default HeaderCartButton