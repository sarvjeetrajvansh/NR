import { Outlet, Link } from "react-router-dom";
import Profile from "./Profile";
const About = () => {
  return (
    <>
      <div className="msg-brd">
        <h1>Welcome to Foodvilla</h1>
      </div>
      <div className="msg-brd">
        <Link to={"profile"}> Click to see developer details:</Link>
      </div>
      <div className="msg-brd">{[<Outlet />]}</div>
    </>
  );
};

export default About;
