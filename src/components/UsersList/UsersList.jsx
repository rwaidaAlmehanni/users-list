import React from 'react'
import Card from '../UI/Card/Card'
import classes from './UsersList.module.css'

const UsersList = ({ users }) => { 
    return (
      <Card className={classes.users}>
        <ul>
            {users.map((user) => { 
                return (
                    <li key={user.id}>{user.name} - {user.age }</li> 
                )
            })}
            
            </ul>
        </Card>
    )
}
export default UsersList