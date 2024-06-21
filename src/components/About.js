import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent did mount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About Us</h1>
        <UserClass name={"Ritika Agrahari"} location={"Paris"} />
      </div>
    );
  }
}

export default About;
