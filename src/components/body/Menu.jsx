import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { addComment } from "../../redux/actionCreators";
import DishDetail from "./DishDetail";
import Loading from "./Loading";
import MenuItem from "./MenuItem";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (dishId, author, rating, comment) =>
      dispatch(addComment(dishId, author, rating, comment)),
  };
};

class Menu extends Component {
  state = {
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

    const menu = this.props.dishes.map((item) => {
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
      const comments = this.props.comments.filter((comment) => {
        return comment.dishId === this.state.selectedDish.id;
      });
      dishDetail = (
        <DishDetail
          dish={this.state.selectedDish}
          comments={comments}
          addComment={this.props.addComment}
        />
      );
    }

    return (
      <div className="container">
        <div className="row">
          <Loading />

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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
