import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="msg-brd">
        <h1>welcome to Foodvilla</h1>
      </div>
      <div className="msg-brd">This product is Developed by :</div>
      <div className="msg-brd">
        <br />
        <Outlet />
      </div>
    </>
  );
};

export default About;
