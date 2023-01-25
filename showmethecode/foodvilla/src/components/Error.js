import Header from "./Header";
import Footer from "./Footer";
import { useRouteError } from "react-router-dom";
import Errimg from "../../assets/error.jpeg";
const Error = () => {
  const err = useRouteError();
  return (
    <>
      <Header />
      <div className="msg-brd">
        {/* <h2>{err.status + ":" + err.message} </h2> */}
        <img
          className="error-img"
          src={Errimg}
          alt="{err.status + ':' + err.message}"
        />
      </div>
      <Footer />
    </>
  );
};
export default Error;
