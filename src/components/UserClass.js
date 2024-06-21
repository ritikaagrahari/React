import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "user",
        location: "location",
      },
    };
    // console.log("child constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ritikaagrahari");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    // console.log("child render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: ritikaagrahari2002@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
