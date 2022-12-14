import React, { Component } from "react";
import axios from "../../axios-orders";
import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }

  render() {
    let orders;
    if (this.props.loading) {
      orders = <Spinner />;
    } else {
      orders = (
        <div>
          {this.props.orders.map((order) => (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={order.price}
            />
          ))}
        </div>
      );
    }
    return <div>{orders}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token, userId) => dispatch(actionCreators.fetchOrders(token, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
