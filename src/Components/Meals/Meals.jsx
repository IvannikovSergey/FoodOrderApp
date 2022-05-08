import PromoText from "./PromoText";
import MealsList from "./MealsList";


function Meals(props) {
    return <>
        <PromoText/>
        <MealsList id={props.id}/>
    </>
}

export default Meals