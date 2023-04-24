import { combineReducers } from "redux";
import COMMENTS from "../data/comments";
import DISHES from "../data/dishes";

const dishReducer = (dishState = DISHES, action) => {
  return dishState;
};

const commentsReducer = (commentsState = COMMENTS, action) => {
  if (action.type === "ADD_COMMENT") {
    let comment = action.payload;
    comment.id = commentsState.length;
    comment.date = new Date().toDateString();

    console.log(comment);

    return commentsState.concat(comment);
  }
  return commentsState;
};
export const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentsReducer,
});
