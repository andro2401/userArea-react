import React from "react";
import ReactDOM from "react-dom";
import styles from './Modal.module.css';
import Card from "./Card";
import Button from "./Button";

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onEvent}></div>;
}
const ModalOverlay = props => {
    return (
        <Card className={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
            <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
            <Button onClick={props.onEvent}>Ok</Button>
        </footer>
    </Card>
    );
}

const Modal = props => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop
                    onEvent={props.onEvent}
                />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onEvent={props.onEvent}
                />,
                document.getElementById('overlay-root')
            )}
        </>
    )
}

export default Modal;