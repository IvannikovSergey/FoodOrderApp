import style from "./Cart.module.css";

const Cart = (props) => {
  const cartItem = (
    <ul className={style["cart-items"]}>
      {" "}
      {[{ id: "m1", name: "sushi", amount: "1" }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItem}
      <div className={style.total}>
        <span>Итого</span>
        <span>49.99</span>
      </div>
      <div className={style.action}>
        <button className={style["button--alt"]}>Закрыть</button>
        <button className={style.button}>Заказать</button>
      </div>
    </div>
  );
};

export default Cart;
