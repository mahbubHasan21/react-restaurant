import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import COMMENTS from "../../data/comments";
import DISHES from "../../data/dishes";
import DishDetail from "./DishDetail";
import MenuItem from "./MenuItem";

class Menu extends Component {
  state = {
    dishes: DISHES,
    comments: COMMENTS,
    selectedDish: null,
    modalOpen: false,
  };

  onDishSelect = (dish) => {
    this.setState({
      selectedDish: dish,
      modalOpen: !this.state.modalOpen,
    });
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };
  render() {
    document.title = "Menu";

    const menu = this.state.dishes.map((item) => {
      return (
        <MenuItem
          dish={item}
          key={item.id}
          onDishSelect={() => this.onDishSelect(item)}
        />
      );
    });

    let dishDetail = null;
    if (this.state.selectedDish != null) {
      const comments = this.state.comments.filter((comment) => {
        return comment.dishId === this.state.selectedDish.id;
      });
      dishDetail = (
        <DishDetail dish={this.state.selectedDish} comments={comments} />
      );
    }

    return (
      <div className="container">
        <div className="row">
          {menu}

          <Modal isOpen={this.state.modalOpen}>
            <ModalBody>{dishDetail}</ModalBody>
            <ModalFooter>
              <Button onClick={this.toggleModal}>Close</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Menu;
