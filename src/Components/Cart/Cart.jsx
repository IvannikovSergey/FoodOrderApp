import styles from './Cart.module.css'
import Modal from "../UI/Modal";

const Cart = (props) => {

    const cartItems = <ul className={styles['cart-items']}>{
        [{id: 'm2', name: 'sushi', amount: '2', price: '30'}].map(item => <li>{item.name}</li>)
    }</ul>

    return <Modal onCloseCart={props.onHideCart}>
        {cartItems}
        <div className={styles.total}>
            <span>итого</span>
            <span>43</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onHideCart}>Закрыть</button>
            <button className={styles.button} >Заказать</button>
        </div>
    </Modal>
}

export default Cart