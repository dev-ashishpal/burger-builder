import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";
import { Link } from "react-router-dom";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];
const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        {" "}
        Current Price: <strong> $ {props.burgerPrice.toFixed(2)} </strong>{" "}
      </p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            added={() => props.addition(ctrl.type)}
            removed={() => props.deduction(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            key={ctrl.label}
            label={ctrl.label}
          />
        );
      })}
      <button
        disabled={!props.purchasable}
        className={classes.OrderButton}
        onClick={props.ordered}
      >
          {props.isAuth ? 'ORDER NOW!!' : "SIGN UP TO ORDER"}
        {/*<Link to="/checkout">ORDER NOW!</Link>*/}
      </button>
    </div>
  );
};

export default buildControls;
