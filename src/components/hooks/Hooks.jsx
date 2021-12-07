import { Button, Stack } from '@mui/material';
import React from 'react'
import Header from '../header/Header'
import './hooks.scss'

export default function Hooks() {
    return (
        <React.Fragment>
            <Header/>
            <div className="hooks">
                <div >
                    <UseStateDemo/>
                    <UseEffectDemo/>
                </div>    
            </div>
        </React.Fragment>
    )
}



function UseStateDemo() {
    const [counter, setCounter] = React.useState(0);
    const increment = () => {
        setCounter(counter+1);
    }
    const decrement = () => {
        setCounter(counter-1);
    }
    return(
        <div className="hook">
            <h2>this is the example for useState</h2>
            <p>state value : {counter}</p>
            <div className="buttons">
                <Button onClick={increment} variant="contained" color="success" sx={{marginRight:'10px'}}>Increment</Button>
                <Button onClick={decrement} variant="contained" color="error" sx={{marginLeft:'10px'}}>decrement</Button>
            </div>
            <p>the useState hook is used to define a state value to store counter.</p>
        </div>
    )
}

function UseEffectDemo() {
    const [counter, setCounter] = React.useState(0);
    const increment = () => {
        setCounter(counter+1);
    }

    React.useEffect(()=>{
        console.log('inside useEffect');
        console.log('re-rendering')
    },[counter])

    return (
        <div className="hook">
            <h2>this is the example for useEffect</h2>
                
            <div className="buttons">
                <Button onClick={increment} variant="contained" color="success" sx={{marginRight:'10px'}}>Rerender</Button>
            </div>
            <p>check the console, useEffect is triggered when conter changes.</p>
        </div>
    )
}
