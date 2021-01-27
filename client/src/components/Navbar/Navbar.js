import React, {useState} from 'react';
import { AppBar, FormControl, InputLabel, Select, MenuItem, FormHelperText, Avatar } from '@material-ui/core';

import useStyles from './styles';
import logo from '../../images/logo.png';

function Navbar() {
    const classes = useStyles();
    const [category, setCategory] = useState('');

    const handleSelectChange = (e) => {
        setCategory(e.target.value);
    }

    return (
        <AppBar className={classes.appBar} position="static" color="inherit" >
            <img className={classes.image} src={logo} alt="icon" height="50" />
            <FormControl className={classes.formControl} >       
                <InputLabel id="selectInputLabel">Category</InputLabel>         
                <Select  labelId="selectInputLabel" value={category} onChange={handleSelectChange} >
                    <MenuItem value={'all products'}>All products</MenuItem>
                    <MenuItem value={'sport'}>Sport</MenuItem>
                    <MenuItem value={'technology'}>Technology</MenuItem>
                    <MenuItem value={'clothes'}>Clothes</MenuItem>
                </Select>
                <FormHelperText>What are you looking for?</FormHelperText>
            </FormControl>
            <Avatar className={classes.avatar} /> 
        </AppBar>
    )
}

export default Navbar
