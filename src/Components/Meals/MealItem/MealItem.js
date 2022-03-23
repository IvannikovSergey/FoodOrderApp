import style from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const formattedPrice = `$${props.price.toFixed(2)}`;

  return (
    <li className={style.meal}>
      <div>
        <h3 className={style.h3}>{props.name}</h3>
        <div className={style.description}>{props.description}</div>
        <div className={style.price}>{formattedPrice}</div>
      </div>
      <MealItemForm id={props.id}/>
    </li>
  );
};

export default MealItem;
