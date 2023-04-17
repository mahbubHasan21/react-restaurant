import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      contactnu: "",
      email: "",
      agree: false,
      contactType: "tel",
      message: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState({
      [name]: [value],
    });
  };
  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-8 offset-md-2">
              <form onSubmit={this.handleSubmit}>
                <h3>Send us your Feedback</h3>
                <div className="form-group">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Enter your first name"
                    value={this.state.firstname}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Enter your last name"
                    value={this.state.lastname}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    name="contactnu"
                    placeholder="Enter your contact number"
                    value={this.state.contactnu}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={this.state.agree}
                    onChange={this.handleInputChange}
                  />
                  <strong>May we contact you?</strong>

                  <label>Contact Type</label>
                  <select
                    name="contactType"
                    value={this.state.contactType}
                    onChange={this.handleInputChange}
                    required
                  >
                    <option>tel</option>
                    <option>email</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
