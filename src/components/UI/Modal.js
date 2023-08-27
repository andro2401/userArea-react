import React from "react";
import styles from './Modal.module.css';
import Card from "./Card";
import Button from "./Button";

const Modal = props => {
    return (
        <>
        <div className={styles.backdrop} onClick={props.onEvent}></div>
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
        </>
    )
}

export default Modal;