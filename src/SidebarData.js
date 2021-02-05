import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <HomeIcon color='primary'/>,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <AccountBoxIcon color='primary'/>,
        cName: 'nav-text'
    },
    {
        title: 'Register',
        path: '/register',
        icon: <AddCircleIcon color='primary'/>,
        cName: 'nav-text'
    }
]