import styles from './InputForm.module.css'

const InputForm = (props) => {
    return <div className={styles.input}>
        <label htmlFor="input.id">{props.label}</label>
        <input {...props.input}/>
    </div>
}

export default InputForm