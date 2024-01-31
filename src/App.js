import React, { useState } from 'react'
import AddUser from './components/AddUser/AddUser'
import UsersList from './components/UsersList/UsersList'
import ErrorModal from './components/ErrorModal/ErrorModal'
import './App.css';

function App() {
  const [users, setUsers] = useState([])

  const onAddUser = (user) => { 
    setUsers((prev) => [{ ...user, id: Math.random().toString() }, ...prev])
  }

  return (
    <div className="App">
        <AddUser onAddUser={onAddUser} />
        <UsersList users={users} />
    </div>
  );
}

export default App;
