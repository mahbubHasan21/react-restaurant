import React, { Component } from "react";
import { Button, Form, Input } from "reactstrap";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      rating: "",
      comment: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: [event.target.value],
    });
  };
  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();

    this.setState({
      author: "",
      rating: "",
      comment: "",
    });
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={this.handleSubmit}
          style={{ background: "none", padding: "unset", margin: "unset" }}
        >
          <Input
            type="text"
            name="author"
            value={this.state.author}
            placeholder="Your name"
            required
            onChange={this.handleInputChange}
          />
          <br />
          <Input
            type="select"
            name="rating"
            value={this.state.rating}
            required
            onChange={this.handleInputChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          <br />
          <Input
            type="textarea"
            name="comment"
            value={this.state.comment}
            placeholder="Your comment"
            required
            onChange={this.handleInputChange}
          />
          <Button type="submit">Submit comment</Button>
        </Form>
      </div>
    );
  }
}

export default CommentForm;
