/* eslint-disable react/prop-types */
import { StarIcon } from "@chakra-ui/icons";
import { Image, Box, Badge, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, title, price, rating, brand, thumbnail }) => {
  const navigate = useNavigate();

  return (
    <Box className="ProductCard" onClick={() => navigate(`/product/${id}`)}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box className="prodTitle">
          <Image src={thumbnail} alt={title} />

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
            className="title"
          >
            {title}
          </Box>
        </Box>

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>

            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {Math.floor(Math.random() * 10)} offers &bull;{" "}
              {Math.floor(Math.random() * 10)} discounts
            </Box>
          </Box>
          <Box fontSize={15} mt={3}>
            Sold Out: {price}
            <Box as="span" color="gray.600" fontSize="sm">
              / Week
            </Box>
          </Box>
          <Box display="flex" fontSize={15} mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < rating ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {Math.floor(Math.random() * 500)} reviews
            </Box>
          </Box>
          <Text fontSize={14} mt={2} fontWeight={"500"}>
            {" "}
            {brand}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
