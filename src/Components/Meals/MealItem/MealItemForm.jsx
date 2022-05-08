import styles from './MealItemForm.module.css'
import InputForm from "../../UI/InputForm";

const MealItemForm = (props) => {
    return <form className={styles.form}>
        <InputForm label='Количество' input={{
            id: props.id,
            type: 'number',
            defaultValue:'1'
        }}/>
        <button>Добавить</button>
    </form>
}

export default MealItemForm