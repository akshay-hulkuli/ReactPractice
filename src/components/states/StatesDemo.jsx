import { Button } from '@mui/material';
import React, { Component } from 'react'
import './states.scss'
import Header from '../header/Header';

export class StatesDemo extends Component {
    constructor(props){
        super(props);
        this.state = { color:'#03fcb1'};
    }

    onChangeColor1 = () => {
        this.setState({color:'#03fcb1'});
    }

    onChangeColor2 = () => {
        this.setState({color:'#c91652'});
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="bg" style={{background:this.state.color}}>
                    <Button color="secondary" variant="contained" onClick={this.onChangeColor2}>change color to dark pink </Button>
                    <h4>this.state.color changes onclick hence the background</h4>
                    <Button color="secondary" variant="contained" onClick={this.onChangeColor1}>change color to light green </Button>
                </div>
            </div>
        )
    }
}

export default StatesDemo
