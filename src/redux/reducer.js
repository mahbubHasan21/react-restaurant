import { combineReducers } from "redux";
import COMMENTS from "../data/comments";
import DISHES from "../data/dishes";
import * as actionTypes from "./actionTypes";

const dishReducer = (dishState = DISHES, action) => {
  return dishState;
};

const commentsReducer = (commentsState = COMMENTS, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      let comment = action.payload;
      comment.id = commentsState.length;
      comment.date = new Date().toDateString();

      console.log(comment);
      return commentsState.concat(comment);

    default:
      return commentsState;
  }
};
export const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentsReducer,
});
