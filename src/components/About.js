import UserClass from "./UserClass"
const About = () => {
  return (
    <div className="about-container">
      <h1>About us</h1>
      {<UserClass name={"Dharanitharan"} location={"Tirupur"} contact={"@dharan.02"}/>}
      {<UserClass name={"AkshaySaini"} location={"Dheradun"} contact={"@akshay.mar07"}/>}

    </div>
  );
};
export default About;