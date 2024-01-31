import React from 'react'
import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import classes from './ErrorModal.module.css'

const ErrorModal = ({ onClose, error }) => { 
    return (
        <>
        <div className={classes.backdrop} onClick={ onClose } />
        <Card className={classes.modal}>
            <header className={ classes.header }>
                <h2>{error?.title}</h2>
            </header>
            <div className={classes.content}> 
                <p className={classes.content}>{ error?.message }</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={ onClose }>Okay</Button> 
            </footer>
            </Card> 
            </>
    )
}
export default ErrorModal