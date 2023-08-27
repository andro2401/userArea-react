import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


function App() {
    const [enteredUser, setEnteredUser] = useState([]);

    const addUserHandler = user => {
        setEnteredUser((prevUser) => {
            return [...prevUser, user]
        })
    }

    let userslist = <p style={{color:"white", textAlign:"center"}}>No entered users yet!</p>
    if (enteredUser.length > 0){
        userslist = (
            <UsersList users={enteredUser} />
        );
    }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
        {userslist}
    </div>
  );
}

export default App;
