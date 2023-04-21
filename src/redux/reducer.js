import COMMENTS from "../data/comments";
import DISHES from "../data/dishes";

const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
};

export const Reducer = (state = initialState, action) => {
  if (action.type === "ADD_COMMENT") {
    let comment = action.payload;
    comment.id = state.comments.length;
    comment.date = new Date().toDateString();

    console.log(comment);

    return {
      ...state,
      comments: state.comments.concat(comment),
    };
  }
  return state;
};
