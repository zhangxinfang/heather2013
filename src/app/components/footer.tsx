"use client"
// import { styled } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import MoreIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import * as React from 'react';



export const Footer = () => {
    const [adding, setAdding] = React.useState(false);
    const [showTomato, setShowTomato] = React.useState(false);
    return (
        <Fab color="primary" aria-label="add">
        <AddIcon />
    </Fab>
    )
}