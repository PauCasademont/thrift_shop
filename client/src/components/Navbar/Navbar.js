import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, FormControl, InputLabel, Select, MenuItem, FormHelperText, Avatar, Menu, IconButton } from '@material-ui/core';

import useStyles from './styles';
import logo from '../../images/logo.png';
import * as prodCat from '../../constants/productCategories';

const categories = [prodCat.ALL_PRODUCTS, prodCat.SPORT, prodCat.TECHNOLOGY, prodCat.CLOTHES];

function Navbar() {    
    const [currentCategory, setCurrentCategory] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    const router = useHistory();

    const handleHomeClick = () => {
        router.push('/');
    }

    const handleSelectChange = (e) => {
        setCurrentCategory(e.target.value);
    }

    const handleUserMenuClick = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleCloseMenu = () => {
        setAnchorEl(null);
    }

    const handleSingInClick = () => {
        router.push('/auth');
    }

    const handleSingUpClick = () => {
        router.push('/auth');
    }

    return (
        <AppBar className={classes.appBar} position="static" color="inherit" >
            <IconButton color="inherit" onClick={handleHomeClick}>
                <img className={classes.image} src={logo} alt="icon" height="50" />
            </IconButton>
            <FormControl className={classes.formControl} >       
                <InputLabel id="selectInputLabel">Category</InputLabel>         
                <Select  labelId="selectInputLabel" value={currentCategory} onChange={handleSelectChange} >
                    {categories.map((category) => (
                        <MenuItem value={category}>{category}</MenuItem>
                    ))}                   
                </Select>
                <FormHelperText>What are you looking for?</FormHelperText>
            </FormControl>
            <IconButton color="inherit" aeia-controls="userMenu" aria-haspopup="true" onClick={handleUserMenuClick}>
                <Avatar  className={classes.avatar} /> 
            </IconButton>
            <Menu id="userMenu" keepMounted anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
                <MenuItem onClick={handleSingInClick}>Sing In</MenuItem>
                <MenuItem onClick={handleSingUpClick}>Sing Up</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar
