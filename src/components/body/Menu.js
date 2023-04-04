import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import DISHES from "../../data/dishes";
import DishDetail from "./DishDetail";
import MenuItem from "./MenuItem";

class Menu extends Component {
  state = {
    dishes: DISHES,
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
    const menu = this.state.dishes.map((item) => {
      return (
        <MenuItem
          dish={item}
          key={item.id}
          onDishSelect={() => this.onDishSelect(item)}
        />
      );
    });

    let selectedDish = null;
    if (this.state.selectedDish != null) {
      selectedDish = <DishDetail dish={this.state.selectedDish} />;
    }

    return (
      <div className="container">
        <div className="row">
          {menu}

          <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
            <ModalBody>{selectedDish}</ModalBody>
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
