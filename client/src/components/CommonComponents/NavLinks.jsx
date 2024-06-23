import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <Box className="NavLinks">
      <Link>
        <Image
          src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png"
          alt="PhoneImage"
        />
        <b>How do you want your items?</b>
      </Link>

      <Link>
        <b className="bi bi-geo-alt"></b>
        <Text fontWeight={"light"}>IN, KA, Bangalore, 560066</Text>
      </Link>

      <Link to={"/shopping"}>Deals</Link>
      <Link to={"/shopping"}>Grocery & Essentials</Link>
      <Link to={"/shopping"}>{`Mother's Day`}</Link>
      <Link to={"/shopping"}>Teacher Appreciation</Link>
      <Link to={"/shopping"}>National Pet Month</Link>
      <Link to={"/shopping"}>Home</Link>
      <Link to={"/shopping"}>Fashion</Link>
      <Link to={"/shopping"}>Outdoor Fun</Link>
    </Box>
  );
};

export default NavLinks;
