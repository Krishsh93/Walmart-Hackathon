import { useEffect, useState } from "react";
import { getProducts } from "../../redux/actions/get_products";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Box, Text } from "@chakra-ui/react";

const ShoppingBodyRight = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.getProducts);

  useEffect(() => {
    dispatch(getProducts(1));
  }, []);

  if (products.loading) return <Text className="loading">Loading...</Text>;

  return (
    <Box className="ShoppingBodyRight" fontFamily={"Poppins"} fontSize={21}>
      <Box>
        <Text>
          <b>Trending products on Walmart</b>
        </Text>
      </Box>

      <div className="GridContainer">
        {products.data.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
    </Box>
  );
};

export default ShoppingBodyRight;
