import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredients = (ingName) => {
  return { type: actionTypes.ADD_INGREDIENT, ingredientName: ingName };
};

export const removeIngredients = (ingName) => {
  return { type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENT,
    ingredients: ingredients,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get(
        "https://react-burger-79bbb-default-rtdb.firebaseio.com/ingredients.json"
      )
      .then((res) => {
        dispatch(setIngredients(res.data))
        // console.log(this.props);
      }).catch(err => {
      console.log(err);
    });
  };
};
