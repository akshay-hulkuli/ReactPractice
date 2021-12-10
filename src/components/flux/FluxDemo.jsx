import Header from '../header/Header'
import React from "react";
import { Button } from '@mui/material';
import DisplayPost from './DisplayPost';

export default function FluxDemo() {
    const [flag, setFlag] = React.useState(false);

    const openPosts = () => {
        setFlag(!flag);
    }

    return (
        <div>
            <Header/>
            <div style={{textAlign:'center'}}>
                <Button onClick={openPosts} variant="contained" color="secondary">getPosts</Button>
                {!flag ? "" : 
                <DisplayPost/>} 
            </div>
        </div>
    )
}
