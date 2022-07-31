import React from "react";
import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import {connect} from "react-redux";

class Layout extends React.Component {
  state = {
    showSideDrawer: false,
  };

  toggleSideDrawerClosedHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
 
  render() {
    return (
      <Aux>
        <Toolbar click={this.toggleSideDrawerClosedHandler} isAuth={this.props.isAuthenticated} />
        <SideDrawer
            isAuth={this.props.isAuthenticated}
          open={this.state.showSideDrawer}
          closed={this.toggleSideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);
