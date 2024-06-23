import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import SearchBox from "./SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { bagProducts } from "../../redux/actions/bag_products";

const TopNav = () => {
  const dispatch = useDispatch();
  const bag = useSelector((store) => store.bagProducts);
  const loginDetails = useSelector((store) => store.login);

  useEffect(() => {
    if (loginDetails.access_token) dispatch(bagProducts(loginDetails.email));
  }, []);

  return (
    <Box className="TopNav">
      <Link to={"/"}>
        <Image
          src="https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg"
          alt="Walmart Logo"
        />
      </Link>

      <Link>
        <b className="bi bi-grid"></b>
        <b>Departments</b>
      </Link>

      <Link>
        <b className="bi bi-grid-fill"></b>
        <b>Services</b>
      </Link>

      <SearchBox />

      <Link to="/wishlist" className="FlexLink">
        <b className="bi bi-heart"></b>
        <span>
          Reorder <b>My Items</b>
        </span>
      </Link>

      <Link to={"/login"} className="FlexLink">
        <b className="bi bi-person-fill"></b>
        <span>
          Sign In <b>Account</b>
        </span>
      </Link>

      <Link to={"/bag"} className="FlexLink CartLink">
        <b className="bi bi-cart2">
          <Text>{bag.totalCount}</Text>
          <b className="bi bi-currency-dollar">{bag.totalCost}</b>
        </b>
      </Link>
    </Box>
  );
};

export default TopNav;
