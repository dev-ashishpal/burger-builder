import React from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";
import {connect} from "react-redux";

class OrderSummary extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[OrderSummary DidUpdate]');
    }

    render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}> {igKey} </span> :
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Order: </h3>
        <p>A Delicious Burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: $ {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout.</p>
        <Button clicked={this.props.purchaseCancel} btnType="Danger">
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}


export default OrderSummary;
