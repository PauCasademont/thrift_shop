import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { AppBar, FormControl, InputLabel, Select, MenuItem, FormHelperText, Avatar, Menu, IconButton } from '@material-ui/core';

import useStyles from './styles';
import logo from '../../images/logo.png';
import * as prodCat from '../../constants/productCategories';

const categories = [prodCat.ALL_PRODUCTS, prodCat.SPORT, prodCat.TECHNOLOGY, prodCat.CLOTHES];

function Navbar({ setRegistering, user, setUser }) {    
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

    const handleSignInClick = () => {
        handleCloseMenu();
        setRegistering(false);
        router.push('/auth');
    }

    const handleSignUpClick = () => {
        handleCloseMenu();
        setRegistering(true);
        router.push('/auth');
    }

    const handleLogoutClick = () => {
        swal({ 
            title: "Logout", 
            text: "Are you sure you want to logout?", 
            icon: "info", 
            buttons: ["Cancel", "Continue"] 
        }).then(accepted => {
            if(accepted) {
                setUser(null);
                router.push('/');
            }
        });
        handleCloseMenu();       
    }

    const handleAddProductClick = () => {
        handleCloseMenu();
        router.push('/upload');
    }

    return (
        <AppBar className={classes.appBar} position="static" >
            <IconButton color="inherit" onClick={handleHomeClick}>
                <img className={classes.image} src={logo} alt="logo" />
            </IconButton>
            <FormControl className={classes.formControl} >       
                <InputLabel id="selectInputLabel">Category</InputLabel>         
                <Select  labelId="selectInputLabel" value={currentCategory} onChange={handleSelectChange} >
                    {categories.map((category, index) => (
                        <MenuItem key={index} value={category}>{category}</MenuItem>
                    ))}                   
                </Select>
                <FormHelperText>What are you looking for?</FormHelperText>
            </FormControl>
            <IconButton color="inherit" aeia-controls="userMenu" aria-haspopup="true" onClick={handleUserMenuClick}>
                <Avatar  className={classes.avatar} >{user?.username.charAt(0).toUpperCase()}</Avatar> 
            </IconButton>
            <Menu id="userMenu" keepMounted anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
                { !user && <MenuItem onClick={handleSignInClick}>Sign In</MenuItem>}             
                { !user && <MenuItem onClick={handleSignUpClick}>Sign Up</MenuItem>} 
                { user && <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>}   
                { user && <MenuItem onClick={handleAddProductClick}>Add Product</MenuItem>}      
            </Menu>
        </AppBar>
    )
}

export default Navbar
