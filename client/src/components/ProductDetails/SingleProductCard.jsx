/* eslint-disable react/prop-types */

import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Image, Text, Heading } from "@chakra-ui/react";

export default function SingleProductCard({
  title,
  price,
  rating,
  thumbnail,
  description,
  discountPercentage,
}) {
  return (
    <Box fontFamily={"Poppins"} className="SingleProductCard">
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={thumbnail} alt={title} />

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

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {title}
          </Box>

          <Box fontSize={15}>
            Sold Out: {price}
            <Box as="span" color="gray.600" fontSize="sm">
              / Week
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
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

          <Heading
            mt={3}
            as="h3"
            color="red"
            fontWeight="bold"
            fontSize={17}
            fontFamily={"Poppins"}
          >
            Now <span>$ {price} </span>
          </Heading>

          <Text mt={2}>
            30-day best price $ {price} <span>({discountPercentage}%)</span>
          </Text>

          <Text>
            Was $ {Math.floor(price + (price * discountPercentage) / 100)}{" "}
            <span>(-{discountPercentage}%)</span>{" "}
          </Text>

          <Text mt={2} textAlign={"justify"}>
            <b>Description: </b>
            {description}.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
