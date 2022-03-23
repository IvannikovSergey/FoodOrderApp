import styleCard from "./Card.module.css";

const Card = (props) => {
  return <div className={styleCard.card}>{props.children}</div>;
};

export default Card;
