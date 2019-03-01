import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      error: ""
    };
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        this.setState({ error: err });
        console.log(err);
      });
  }

  addSmurf = (e, name, age, height) => {
    e.preventDefault();

    const newSmurf = {
      name: name,
      age: age,
      height: height
    };

    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { smurfs } = this.state;
    return (
      <div className="App">
        <div className="navbar">
          <NavLink exact to="/" activeClassName="activeNavBtn">
            Smurfs
          </NavLink>

          <NavLink to="/smurf-form" activeClassName="activeNavBtn">
            Add a Smurf
          </NavLink>
        </div>

        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm {...props} smurfs={smurfs} addSmurf={this.addSmurf} />
          )}
        />
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={smurfs} />}
        />
      </div>
    );
  }
}

export default App;
