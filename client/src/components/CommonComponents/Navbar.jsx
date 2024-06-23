import { Box } from "@chakra-ui/react";
import NavLinks from "./NavLinks";
import TopNav from "./TopNav";

const Navbar = () => {
  return (
    <Box bg={"#0071dc"} className="Navbar">
      <TopNav />
      <NavLinks />
    </Box>
  );
};

export default Navbar;
