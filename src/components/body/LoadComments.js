import dateFormat from "dateformat";
import React from "react";

const LoadComments = (props) => {
  return props.comments.map((comment) => {
    return (
      <div key={comment.id}>
        <hr />
        <h5>{comment.author}</h5>
        <p>{comment.comment}</p>
        <p>{comment.rating}</p>
        <p>{dateFormat(comment.date, "dddd, mmmm ds, yyyy, h:MM TT")}</p>
      </div>
    );
  });
};

export default LoadComments;
