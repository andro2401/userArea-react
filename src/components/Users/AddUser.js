import React, { useState, useRef } from "react";
import styles from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import Wrapper from "../Helpers/Wrapper";


const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef()
    const [error, setError] = useState();

    const submitHandler = e => {
        e.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if (enteredName.trim() === 0 || enteredUserAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if(+enteredUserAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }
        const userInput = {
            userName: enteredName,
            age: enteredUserAge,
            id: Math.random().toString()
        }
        props.onAddUser(userInput);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }
    const errorHandler = ()=> {
        setError(null)
    }
    return (
        <>
            {error && <Modal onEvent={errorHandler} title={error.title} message={error.message}/>}
            <Card className={styles.input}>
                <form action="" onSubmit={submitHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
}

export default AddUser;