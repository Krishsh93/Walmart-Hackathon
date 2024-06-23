import { Box, Image, Table, Tbody, Text } from "@chakra-ui/react";
import BagContainer from "../components/Bag/BagContainer";
import Navbar from "../components/CommonComponents/Navbar";
import { useEffect, useState } from "react";
import { wishlistProducts } from "../redux/actions/wishlist_products";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((store) => store.wishlistProducts);
  const loginDetails = useSelector((store) => store.login);

  const [updated, setUpdated] = useState(1);
  const updateState = () => {
    setUpdated(updated + 1);
  };

  useEffect(() => {
    dispatch(wishlistProducts(loginDetails.email));
  }, [updated]);

  <Text className="WishlistPara" fontFamily={"Poppins"}>
    <b>
      {wishlist.totalCount > 0 ? (
        "Your Bag Items"
      ) : (
        <Image
          src="https://www.bing.com/th/id/OGC.7a61d43e9897d56a9d07c3410da472a0?pid=1.7&rurl=https%3a%2f%2fimages.squarespace-cdn.com%2fcontent%2fv1%2f5a9d990755b02c16eef28423%2f1522958745117-C9FZPNWFRB9HHO3IK1TD%2fanimat-shopping-cart-color.gif&ehk=0KpAJR5qP4Nnf5LdIIWH%2f0v5PK3PI%2bA7Bt4Kk604c1A%3d"
          alt="EmptyBag"
          className="CartLogo"
        />
      )}
    </b>
  </Text>;

  return (
    <div className="Wishlist">
      <Navbar />

      <Text className="WishlistPara" fontFamily={"Poppins"}>
        <b>
          {wishlist.totalCount > 0 ? (
            "Your Wishlist Items"
          ) : (
            <div>
              <b>Your Wishlist is Empty</b>
              <Image
                src="https://www.bing.com/th/id/OGC.7a61d43e9897d56a9d07c3410da472a0?pid=1.7&rurl=https%3a%2f%2fimages.squarespace-cdn.com%2fcontent%2fv1%2f5a9d990755b02c16eef28423%2f1522958745117-C9FZPNWFRB9HHO3IK1TD%2fanimat-shopping-cart-color.gif&ehk=0KpAJR5qP4Nnf5LdIIWH%2f0v5PK3PI%2bA7Bt4Kk604c1A%3d"
                alt="EmptyBag"
                className="CartLogo"
              />
            </div>
          )}
        </b>
      </Text>

      <Box className="FlexTable">
        <Table
          w={"max-content"}
          variant="striped"
          className="BagContainer"
          fontFamily={"Poppins"}
        >
          <Tbody>
            {wishlist.products.map((product) => (
              <BagContainer
                {...product}
                key={product.id}
                target="wishlist"
                updateState={updateState}
              />
            ))}
          </Tbody>
        </Table>
      </Box>

      <Box className="WalmartDiv">
        <b>WALMART</b>
      </Box>
    </div>
  );
};

export default Wishlist;
