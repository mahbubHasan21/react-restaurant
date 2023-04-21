import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import CommentsForm from "./CommentsForm";
import LoadComments from "./LoadComments";

const DishDetail = (props) => {
  return (
    <div>
      <Card style={{ margin: "20px 0px" }}>
        <CardBody style={{ textAlign: "left" }}>
          <CardImg width="100%" alt={props.dish.name} src={props.dish.image} />
          <CardTitle tag="h4" style={{ marginTop: "20px" }}>
            {props.dish.name}
          </CardTitle>
          <CardText>{props.dish.description}</CardText>
          <CardText>{props.dish.price}/-</CardText>

          <LoadComments comments={props.comments} />
          <hr />
          <CommentsForm dishId={props.dish.id} />
        </CardBody>
      </Card>
    </div>
  );
};

export default DishDetail;
