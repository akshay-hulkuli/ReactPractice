import { Button, Stack } from '@mui/material';
import React from 'react'
import Header from '../header/Header'
import './hooks.scss'
import { ThemeContext } from '../..';

import {Fragment, useRef} from 'react';

export default function Hooks() {
    
    return (
        <React.Fragment>
            <Header/>
            <div className="hooks">
                <div >
                    <UseStateDemo/>
                    <UseEffectDemo/>
                    <UseContextDemo/>
                    <UseRefDemo />
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


function UseContextDemo() {
    const theme = React.useContext(ThemeContext);
    const [foreground, setforeground] = React.useState(theme.light.foreground);
    const [background, setBackgrond] = React.useState(theme.light.background); 

    const changeToDark = () => {
        setforeground(theme.dark.foreground);
        setBackgrond(theme.dark.background);
    }

    const changeToLight = () => {
        setforeground(theme.light.foreground);
        setBackgrond(theme.light.background);
    }
    return(
        <div style={{color:foreground, backgroundColor:background, textAlign:'center', padding:'30px'}}>
            <h2>this is useContext demo</h2>
            <p>the theme is provided in the top most hierarchy. and is available everywhere now</p>
            <div className="buttons">
                <Button onClick={changeToDark} variant="contained" color="secondary" sx={{margin:'10px'}}>DarkTheme</Button>
                <Button onClick={changeToLight} variant="contained" color="secondary" sx={{margin:'10px'}}>LightTheme</Button>
            </div>
        </div>
    );
}


function UseRefDemo() {
 
    // Creating a ref object using useRef hook
    const focusPoint = useRef(null);
    const onClickHandler = () => {
      focusPoint.current.value =
        "The quick brown fox jumps over the lazy dog";
        focusPoint.current.focus();
    };
    return (
      <div className="hook">
        <div>
          <Button onClick={onClickHandler} variant="contained" color="secondary">
           AutoFill
          </Button>
        </div>
        <p>
         Click on the action button to
         focus and populate the text.
        </p>
        <textarea ref={focusPoint} id="textarea"/>
      </div>
    );
  };