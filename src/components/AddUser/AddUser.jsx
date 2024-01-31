import React, { useState} from 'react'
import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import ErrorModal from '../ErrorModal/ErrorModal'
import classes from './AddUser.module.css'

const AddUser = ({ onAddUser }) => { 
    const [user, setUser] = useState({ name: '', age: '' })
    const [error, setError] = useState()

    const changeHandler = (e, key) => { 
        setUser((prev) => ({ ...prev, [key] : e.target.value }))
    }

    const resetHandler = () => { 
        setUser({ name: '', age: ''})
    }

    const errorHandler = () => { 
        setError()
        resetHandler()
    }

    const onSave = (e) => {
        e.preventDefault()
        if (user.name.trim().length === 0 || user.age.length === 0) {
            setError({ title: 'Invalid Data', message: 'Please enter valid name and age (no empty data)!' })
         } else if (+user.age < 1) {
            setError({title: 'Invalid Age', message: 'Please Enter valid age it should be more than 1 !!'})
         } else {
            onAddUser(user)
            resetHandler()
         }
    }

    return (
        <>
        {error && <ErrorModal error={error} onClose={() => errorHandler()} />}
        <Card className={ classes.input }>
          <form onSubmit={onSave}>
            <label htmlFor='name'>UserName</label>
            <input id="name" value={user.name} type="text" onChange={(e) => changeHandler(e, 'name')} />
            <label>Age (years)</label>
            <input value={user.age} type="number" onChange={(e) => changeHandler(e, 'age')} />
            <Button type="submit">Save</Button>
           </form>
            </Card>
            </>
    )
}
export default AddUser