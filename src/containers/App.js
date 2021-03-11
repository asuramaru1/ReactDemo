import React, { Component } from "react";
import WithClass from "../hoc/WitchClass";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import AuthContext from "../context/auth-context";

class App extends Component {
  state = {
    persons: [
      { name: "Givi", age: "21", id: 1 },
      { name: "Givi", age: 15, id: 2 },
      { name: "Givi", age: 21, id: 3 },
      { name: "Givi", age: 15, id: 4 },
      { name: "Givi", age: 21, id: 5 },
      { name: "Givi", age: 15, id: 6 },
      { name: "Givi", age: 21, id: 7 },
      { name: "Givi", age: 15, id: 8 },
      { name: "Givi", age: 21, id: 9 },
    ],
    showPersons: false,
    showCockPit: true,
    authenticated: false,
  };

  constructor(props) {
    super(props);
    console.log("app.js constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("app js getDerivedStateFromProps");
    return state;
  }

  componentDidMount() {
    console.log("app.js component did mount");
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("app.js should component update");
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("app.js componentDidUpdate");
  }

  // componentWillMount() {
  //   console.log('app.js componentWillMound');
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };
  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  render() {
    console.log("app.js render");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }
    return (
      <WithClass classes={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockPit: false });
          }}
        >
          Remote Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          {this.state.showCockPit ? (
            <Cockpit
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </WithClass>
    );
  }
}

export default App;
