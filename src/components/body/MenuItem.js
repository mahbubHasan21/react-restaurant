import React from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const MenuItem = (props) => {
  return (
    <div>
      <Card style={{ margin: "20px 0px" }}>
        <CardBody>
          <CardImg
            width="100%"
            alt={props.dish.name}
            src={props.dish.image}
            style={{ opacity: 0.8 }}
          />

          <CardImgOverlay>
            <CardTitle
              tag="h4"
              style={{ textAlign: "center", cursor: "pointer" }}
              onClick={props.onDishSelect}
            >
              {props.dish.name}
            </CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  );
};

export default MenuItem;
