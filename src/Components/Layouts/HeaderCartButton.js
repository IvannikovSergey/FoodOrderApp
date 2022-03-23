import styleCartButton from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={styleCartButton.button}>
      <span className={styleCartButton.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styleCartButton.badge}> 2</span>
    </button>
  );
};
export default HeaderCartButton;
