import React, { Component } from "react";

import classes from "./Person.css";

class Person extends Component {
    render() {
        console.log("person.js render");
        return (
            <React.Fragment>
                <div className={classes.Person}>
                    <p onClick={this.props.click}>
                        I'm a {this.props.name} and i am {this.props.age} old!
                    </p>
                    <p>{this.props.children}</p>
                    <input
                        type="text"
                        onChange={this.props.changed}
                        value={this.props.name}
                    />
                </div>
            </React.Fragment>
        );
    }
}
export default Person;
