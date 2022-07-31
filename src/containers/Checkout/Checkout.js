import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route, Redirect } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
class Checkout extends Component {


  canceled = () => {
    console.log(this.props.history);
    this.props.history.goBack();
  };

  cont = () => {
    console.log("way you go buddy");
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ings) {
    const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            continued={this.cont}
            canceled={this.canceled}
            ingredients={this.props.ings}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          />
        </div>
      );
    }
    return <React.Fragment>{summary}</React.Fragment>;
  }
}
const mapStateToProps = (state) => {
  return {
    ings: state.burger.ingredients,
    price: state.burger.totalPrice,
    purchased: state.order.purchased,
  };
};



export default connect(mapStateToProps)(Checkout);
