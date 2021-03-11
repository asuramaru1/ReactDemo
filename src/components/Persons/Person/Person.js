import React, { Component } from "react";
import AuthContext from "../../../context/auth-context";
import classes from "./Person.css";
import PropTypes from "prop-types";
class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }
  static contextType = AuthContext;
  componentDidMount() {
    //this.inputElement.focus();
    this.inputElement.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log("person.js render");
    return (
      <React.Fragment>
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please login</p>}
        <div className={classes.Person}>
          <p onClick={this.props.click}>
            I'm a {this.props.name} and i am {this.props.age} old!
          </p>
          <p>{this.props.children}</p>
          <input
            type="text"
            //ref={(inputElement) => {this.inputElement = inputElement}}
            ref={this.inputElement}
            onChange={this.props.changed}
            value={this.props.name}
          />
        </div>
      </React.Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default Person;
