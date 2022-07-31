import React from 'react';
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Enjoy your meal!</h1>
            <div style={{width: '100%', height:'100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button clicked={props.canceled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.continued} btnType="Success">CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;