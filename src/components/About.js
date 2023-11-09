import UserClass from "./UserClass";
import React from "react";
import Shimmer from "./Shimmer";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor from parent Constructor..");
  }
  componentDidMount() {
    console.log("Mounting parent Component");
  }
  render() {
    console.log("Rendering from parent");
    return (
      <div className="about-container">
        <h1>About us</h1>
        {<Shimmer />}
        {
          <UserClass
            name={"Dharanitharan"}
            location={"Tirupur"}
            contact={"@dharan.02"}
          />
        }
        {<UserClass />}
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div className="about-container">
//       <h1>About us</h1>
//       {<UserClass name={"Dharanitharan"} location={"Tirupur"} contact={"@dharan.02"}/>}
//       {<UserClass name={"AkshaySaini"} location={"Dheradun"} contact={"@akshay.mar07"}/>}

//     </div>
//   );
// };
export default About;
