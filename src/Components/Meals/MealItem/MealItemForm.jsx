import styles from './MealItemForm.module.css'
import InputForm from "../../UI/InputForm";

const MealItemForm = () => {
    return <form className={styles.form}>
        <InputForm label='Количество' input={{
            id: 'amount',
            type: 'number'
        }}/>
        <button>Добавить</button>
    </form>
}

export default MealItemForm