import React, { useState } from "react";
import styles from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";


const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const usernameHandler = e => {
        setEnteredUsername(e.target.value)
    }
    const ageHandler = e => {
        setEnteredAge(e.target.value)
    }
    const submitHandler = e => {
        e.preventDefault();
        if (enteredUsername.trim() === 0 || enteredAge.trim().length === 0){
            return;
        }
        if(+enteredAge < 1){
            return;
        }
        const userInput = {
            userName: enteredUsername,
            age: enteredAge
        }
        props.onAddUser(userInput);
        setEnteredUsername('');
        setEnteredAge('');
    }
    return (
        <Card className={styles.input}>
            <form action="" onSubmit={submitHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" onChange={usernameHandler} value={enteredUsername}/>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" onChange={ageHandler} value={enteredAge}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;