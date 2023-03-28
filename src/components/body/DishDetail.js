import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

const DishDetail = (props) => {
  return (
    <div>
      <Card style={{ margin: "20px 0px" }}>
        <CardBody style={{ textAlign: "left" }}>
          <CardImg width="100%" alt={props.dish.name} src={props.dish.image} />
          <CardTitle tag="h4" style={{ marginTop: "20px" }}>
            {props.dish.name}
          </CardTitle>
          <CardText>
            <p>{props.dish.description}</p>
            <p>{props.dish.price}/-</p>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default DishDetail;
