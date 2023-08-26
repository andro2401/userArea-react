import React from 'react';
import AddUser from "./components/Users/AddUser";


function App() {
    const addUserHandler = user => {
        const newUser = {
            ...user
        }
        console.log(newUser)
    }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
    </div>
  );
}

export default App;
