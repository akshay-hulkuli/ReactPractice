import React from 'react'
import {useNavigate} from 'react-router-dom';
import { Button, Stack, Paper } from '@mui/material';
import './header.scss'
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  background:'#c9fc5b'
}));

export default function Header() {
    const navigate = useNavigate();
    const navigateTo = (ticket) => {
      switch(ticket){
        case 'states':
            navigate('/');
            break;
        case 'props': 
            navigate('/props');
            break;
        case 'lifecycle': 
            navigate('/lifecycle');
            break;
        case 'hook': 
            navigate('/hooks');
            break;
        case 'portals': 
            navigate('/portals');
            break;
      }
    }
    return (
        <div className="header">
            <h1>select one option to see demo</h1>
             <Stack direction="row" spacing={2}>
                <Item><Button sx={{color:'#180669'}} onClick={()=>navigateTo('states')}>states</Button></Item>
                <Item><Button sx={{color:'#180669'}} onClick={()=>navigateTo('props')}>props</Button></Item>
                <Item><Button sx={{color:'#180669'}} onClick={()=>navigateTo('lifecycle')}>lifecycle</Button></Item>
                <Item><Button sx={{color:'#180669'}} onClick={()=>navigateTo('hook')}>hooks</Button></Item>
                <Item><Button sx={{color:'#180669'}} onClick={()=>navigateTo('portals')}>portals</Button></Item>
            </Stack>
        </div>
    )
}
