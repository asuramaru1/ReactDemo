import React, { PureComponent } from "react";
import Person from "./Person/Person";
class Persons extends PureComponent {
  // static getDerivedStateFromProps(props , state){
  //     console.log('personjs getDerivedState');
  //     return state;
  // }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //     console.log('personjs shouldComponentUpdate');
  //     return nextProps.persons !== this.props.persons;
  //
  // }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("personjs getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("personJs componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("Persons jsComponent will unpount");
  }

  render() {
    console.log("personjs render");

    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}
export default Persons;
