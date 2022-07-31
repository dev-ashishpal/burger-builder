import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavItems/NavItems";
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
  //  ...
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

  return (
    <Aux>
        <Backdrop show={props.open} clicked={props.closed} />
        <div className={attachedClasses.join(' ')}>
            <figure style={{height: "11%", marginBottom: '32px'}}>
                <Logo />
            </figure>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    </Aux>
  );
};

export default sideDrawer;
