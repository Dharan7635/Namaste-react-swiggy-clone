import React from "react";
import Shimmer from "./Shimmer";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Hey!!From Child Constructor")
  }
  componentDidMount() {
    console.log("Mounting child component...");
  }
  render() {
    const { name, location, contact } = this.props;
    const { count } = this.state;
    console.log("Rendering from child class" );
    return (
      <div className="user-card">
        <h1>NAME : {name}</h1>
        <h2>Location : {location}</h2>
        <h2>Contact : {contact}</h2>
        <h3>count:{count}</h3>
        {<Shimmer/>}
        <button
          onClick={() => {
            this.setState({
              count: count + 5,
            });
          }}
        >
          click me to toggle btw 1 & 2 : {count}
        </button>
      </div>
    );
  }
}
export default UserClass;
