import {
  Box,
  Button,
  Flex,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import Navbar from "../components/CommonComponents/Navbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagProducts } from "../redux/actions/bag_products";
import BagContainer from "../components/Bag/BagContainer";
import { Link } from "react-router-dom";

const Bag = () => {
  const dispatch = useDispatch();
  const bag = useSelector((store) => store.bagProducts);
  const loginDetails = useSelector((store) => store.login);

  const [updated, setUpdated] = useState(1);
  const updateState = () => {
    setUpdated(updated + 1);
  };

  useEffect(() => {
    if (loginDetails.email) dispatch(bagProducts(loginDetails.email));
  }, [updated]);

  return (
    <Box bg={"whitesmoke"} className="Bag">
      <Navbar />

      <Text className="WishlistPara" fontFamily={"Poppins"}>
        <b>
          {bag.totalCount > 0 ? (
            "Your Bag Items"
          ) : (
            <div>
              <b>Your Bag is Empty</b>
              <Image
                src="https://www.bing.com/th/id/OGC.7a61d43e9897d56a9d07c3410da472a0?pid=1.7&rurl=https%3a%2f%2fimages.squarespace-cdn.com%2fcontent%2fv1%2f5a9d990755b02c16eef28423%2f1522958745117-C9FZPNWFRB9HHO3IK1TD%2fanimat-shopping-cart-color.gif&ehk=0KpAJR5qP4Nnf5LdIIWH%2f0v5PK3PI%2bA7Bt4Kk604c1A%3d"
                alt="EmptyBag"
                className="CartLogo"
              />
            </div>
          )}
        </b>
      </Text>

      <Flex
        direction={["column", "row"]}
        className="FlexTable"
        display={bag.totalCount > 0 ? "flex" : "none"}
      >
        <Table
          w={"max-content"}
          variant="striped"
          className="BagContainer"
          fontFamily={"Poppins"}
        >
          <Tbody>
            {bag.products.map((product) => (
              <BagContainer
                {...product}
                key={product.id}
                updateState={updateState}
                target={"bag"}
              />
            ))}
          </Tbody>
        </Table>

        <Box
          className="CheckOutDetails"
          w={"max-content"}
          fontFamily={"Poppins"}
          borderWidth="1px"
          borderRadius="lg"
        >
          <Button w={"100%"} colorScheme="blue" borderRadius={"25px"}>
            <Link to={"/checkout"}>Continue to checkout</Link>
          </Button>

          <Text textAlign={"center"}>Enjoy the best shopping experience.</Text>

          <hr />

          <Table>
            <Tbody>
              <Tr>
                <Td>
                  <b>Subtotal:</b> ({bag.totalCount} items)
                </Td>
                <Td textAlign={"right"}>
                  <i className="bi bi-currency-dollar"></i>
                  {bag.totalCost}
                </Td>
              </Tr>

              <Tr>
                <Td>Shipping</Td>
                <Td textAlign={"right"}>
                  {bag.totalCost < 200 ? (
                    <b className="bi bi-currency-dollar">60</b>
                  ) : (
                    "Free"
                  )}
                </Td>
              </Tr>

              <Tr>
                <Td>
                  <b>Taxes:</b>
                </Td>
                <Td textAlign={"right"}>Calculated at checkout</Td>
              </Tr>

              <Tr>
                <Td>
                  <b>Estimated Total:</b>
                </Td>
                <Td textAlign={"right"}>
                  <i className="bi bi-currency-dollar"></i>
                  {bag.totalCost < 200 ? bag.totalCost + 60 : bag.totalCost}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>

      <Box
        textAlign={"center"}
        bg={"whitesmoke"}
        mt={"1%"}
        paddingBlock={"0.5%"}
        fontFamily={"Poppins"}
        className="WalmartDiv"
      >
        <b>WALMART</b>
      </Box>
    </Box>
  );
};

export default Bag;
