import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavItems/NavItems';

const toolbar = (props) => (
    <header className={classes.Toolbar }>
        <DrawerToggle clicked={props.click} />
        <figure style={{height: "80%"}}>
            <Logo />
        </figure>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
);

export default toolbar;