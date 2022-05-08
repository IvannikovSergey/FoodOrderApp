import style from './Modul.module.css'
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return <div className={style.backdrop} onClick={props.onHideCart}></div>
}

const ModalWindow = (props) => {
    return <div className={style.modal}>
        <div>
            {props.children}
        </div>
    </div>
}

const elementDom = document.getElementById('overlay')

const Modal = (props) => {
    return <>
        {ReactDOM.createPortal(<Backdrop onHideCart={props.onCloseCart}/>, elementDom)}
        {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, elementDom)}
        </>
}
export default Modal