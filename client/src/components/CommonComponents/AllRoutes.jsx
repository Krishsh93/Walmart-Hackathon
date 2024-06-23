import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Shopping from "../../pages/Shopping";
import ProductDetails from "../../pages/ProductDetails";
import Bag from "../../pages/Bag";
import CheckOut from "../../pages/CheckOut";
import Login from "../../pages/Login";
import Orders from "../../pages/Orders";
import PrivateRoute from "./PrivateRoute";
import Wishlist from "../../pages/Wishlist";

const AllRoutes = () => {
  return (
    <div className="AllRoutes">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route
          path="/product/:id"
          element={<PrivateRoute component={ProductDetails} />}
        />

        <Route path="/bag" element={<PrivateRoute component={Bag} />} />

        <Route
          path="/wishlist"
          element={<PrivateRoute component={Wishlist} />}
        />
        
        <Route
          path="/checkout"
          element={<PrivateRoute component={CheckOut} />}
        />
        <Route path="/orders" element={<PrivateRoute component={Orders} />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
