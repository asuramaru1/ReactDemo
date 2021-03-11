import React, { useContext, useEffect, useRef } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = (props) => {
  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);
  console.log(authContext.authenticated);
  useEffect(() => {
    console.log("cockpit.js useEffect");
    toggleButtonRef.current.click();
    return () => {
      console.log("cleaniiiing");
    };
  }, []);

  useEffect(() => {
    console.log("cockpit.js second useEffect");
    return () => {
      console.log("cleaniiiing 2222222");
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
      <button
        ref={toggleButtonRef}
        className={btnClass.join(" ")}
        onClick={props.clicked}
      >
        Toggle me senpai
      </button>
      <button onClick={authContext.login} className={btnClass.join(" ")}>
        Log in{" "}
      </button>
    </div>
  );
};
export default React.memo(cockpit);
