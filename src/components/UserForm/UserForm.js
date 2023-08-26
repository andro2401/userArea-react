import React from "react";
import styles from './UserForm.module.css';
import Button from "../Button/Button";

const UserForm = props => {
    const btnText = 'Add User';
    const submitHandler = e => {
        e.preventDefault();
        console.log('forma')
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles['form-group']}>
                <label htmlFor="userName">User Name</label>
                <input type="text" name="userName"/>
            </div>
            <div className={styles['form-group']}>
                <label htmlFor="age">Age</label>
                <input type="number" name="age"/>
            </div>
            <Button text={btnText} />
        </form>
    );
}

export default UserForm;