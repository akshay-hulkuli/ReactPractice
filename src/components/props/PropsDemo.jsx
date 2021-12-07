import { TextField } from '@mui/material';
import React from 'react'
import Header from '../header/Header'
import './props.scss'

export default function PropsDemo() {
    const [name,setName] = React.useState('');
    const handleChange =(e) => {
        setName(e.target.value);
    }
    return (
        <React.Fragment>
            <Header/>
            <div class="props">
                
                <div className="data">
                    <h2>Sending car name as props</h2>
                    <TextField
                        variant="outlined"
                        placeholder="enter car name"
                        value={name}
                        onChange={handleChange}
                        fullWidth
                    />
                </div>
                <div className="car">
                    <Car brand={name} />
                </div>
                
            </div>
        </React.Fragment>
    )
}



function Car(props) {
    return (
        <>
            <h2>This is a Car component</h2>
            <h2>I am a { props.brand }</h2>
        </>
    );
}
  