import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h1>Page Fatt Gaya</h1>
      <h2>{err.status + ":" + err.message} </h2>
    </>
  );
};
export default Error;
