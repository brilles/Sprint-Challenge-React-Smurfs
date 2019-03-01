import React from "react";

export default class SmurfUpdateForm extends React.Component {
  state = {
    id: "",
    name: "",
    age: "",
    height: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitUpdate = e => {
    this.props.updateSmurf(
      e,
      parseInt(this.state.id),
      this.state.name,
      parseInt(this.state.age),
      this.state.height
    );
    this.setState({
      id: "",
      name: "",
      age: "",
      height: ""
    });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleSubmitUpdate}>
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <input
            type="number"
            name="id"
            placeholder="ID"
            value={this.state.id}
            onChange={this.handleInputChange}
          />
          <button type="submit">Update Smurf</button>
        </form>
      </div>
    );
  }
}
