import React from 'react';
import { Button, TextField } from '@mui/material';
import DrawerAppBar from '../DrawerAppBar';


const Layout = () => {
    return (
        <div className="container">
        <div className="row">
           <DrawerAppBar/>
                   </div>

            <div className='text-danger'> Hello </div>
            <div>
                <TextField label="Nombre" variant="outlined" />
                <Button variant="contained">Enviar</Button>
            </div>
        </div>
    );
}

export default Layout;