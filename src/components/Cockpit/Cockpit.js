import React , {useEffect} from "react";
import classes from "./Cockpit.css";
const cockpit = (props) => {
  useEffect(() =>{
    console.log('cockpit.js useEffect');
     setTimeout(() => {
      alert('Saved data to cloud!');
    },1000);
    return () =>{
      console.log('cleaniiiing');
    }
  }, []);
  useEffect(() => {
    console.log('cockpit.js second useEffect');
    return () => {
      console.log('cleaniiiing 2222222');
    };
  });

  let Assignedclasses = [];
  if (props.personsLength <= 1) {
    Assignedclasses.push(classes.bold);
    Assignedclasses.push(classes.red);
  } else if (props.personsLength <= 2) {
    Assignedclasses.push(classes.red);
  }

  let btnClass = [classes.Button];
    if (props.showPersons) {
        btnClass.push(classes.Red);
    }
    return (
    <div>
      <h1 className={Assignedclasses.join(" ")}>Hi I'm react</h1>
      <button className={btnClass.join(" ")} onClick={props.clicked}>
        Toggle me senpai
      </button>
    </div>
  );
};
export default React.memo(cockpit);
