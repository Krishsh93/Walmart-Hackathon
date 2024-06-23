/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  const loginDetails = useSelector((store) => store.login);

  if (!loginDetails.access_token) return <Navigate to="/login" />;

  return <Component />;
};

export default PrivateRoute;
