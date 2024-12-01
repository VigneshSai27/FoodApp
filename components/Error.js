import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h1>Oops!!</h1>
      <p>Something went wrong!!</p>
      <h3>status code: {err.status}</h3>
      <h3>Msg: {err.data}</h3>
    </>
  );
};

export default Error;
