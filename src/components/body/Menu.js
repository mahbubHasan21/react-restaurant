import React, { Component } from "react";
import DISHES from "../../data/dishes";
import DishDetail from "./DishDetail";
import MenuItem from "./MenuItem";

class Menu extends Component {
  state = {
    dishes: DISHES,
    selectedDish: null,
  };

  onDishSelect = (dish) => {
    this.setState({ selectedDish: dish });
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
          <div className="col-5">{menu}</div>
          <div className="col-7">{selectedDish}</div>
        </div>
      </div>
    );
  }
}

export default Menu;
