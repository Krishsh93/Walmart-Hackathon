import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Navbar from "../components/CommonComponents/Navbar";
import { Link } from "react-router-dom";
import ShopBodyLeft from "../components/ShoppingPage/ShopBodyLeft";
import ShoppingBodyRight from "../components/ShoppingPage/ShoppingBodyRight";
import Footer from "../components/CommonComponents/Footer";
import Pagination from "../components/ShoppingPage/Pagination";

const Shopping = () => {
  return (
    <div className="Shopping">
      <Navbar />

      <Flex className="ShopFlexBox">
        <Image
          src="https://i5.walmartimages.com/dfw/4ff9c6c9-3e10/k2-_79de0e38-c1fa-4fdf-9636-6e588be9fcb1.v1.jpg"
          alt="image"
        />

        <Box>
          <Text>Gifts that are SO Mom</Text>
          <Text>The perfect present totally exists.</Text>
          <Link>Shop all</Link>
        </Box>
      </Flex>

      <Box className="ProdContainer">
        <ShopBodyLeft />
        <ShoppingBodyRight />
      </Box>

      <Pagination />

      <Footer />
    </div>
  );
};

export default Shopping;
