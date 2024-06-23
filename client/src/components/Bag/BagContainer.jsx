/* eslint-disable react/prop-types */

import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  Image,
  Td,
  Text,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { updateBag } from "../../redux/actions/bag.update";
import { useEffect } from "react";
import { removeBagItem } from "../../redux/actions/bag.item.remove";
import { validateItem } from "../../redux/actions/validate_item";
import { useSelector } from "react-redux";

const BagContainer = ({
  id,
  description,
  brand,
  rating,
  thumbnail,
  discountPercentage,
  stock,
  category,
  images,
  title,
  price,
  quantity,
  updateState,
  target,
}) => {
  const toast = useToast();

  const loginDetails = useSelector((store) => store.login);

  useEffect(() => {}, [updateState]);

  return (
    <Tr className="BagContainer">
      <Td>
        <Image
          h={"111px"}
          w={"111px"}
          borderRadius={5}
          src={thumbnail}
          alt={title}
        />
      </Td>

      <Td>
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
      </Td>

      <Td>
        <Text fontWeight={"bold"} color={"red"}>
          Cost: <b className="bi bi-currency-dollar">{price}</b>
        </Text>
        <Button
          onClick={async () => {
            await removeBagItem(target, id);
            updateState();
          }}
          colorScheme="gray"
          variant={"link"}
        >
          Remove
        </Button>
        <Flex gap={3} alignItems={"center"}>
          <Button
            display={target === "wishlist" ? "none" : "inline"}
            isDisabled={quantity == 1 ? true : false}
            onClick={async () => {
              await updateBag(Number(id), { quantity: quantity - 1 });
              updateState();
            }}
          >
            -
          </Button>

          <b>{target == "wishlist" ? null : quantity}</b>

          <Button
            display={target === "wishlist" ? "none" : "inline"}
            onClick={async () => {
              await updateBag(Number(id), { quantity: quantity + 1 });
              updateState();
            }}
          >
            +
          </Button>
        </Flex>

        <Button
          display={target == "wishlist" ? "block" : "none"}
          variant={"link"}
          onClick={async () => {
            const item = {
              id,
              title,
              description,
              price,
              discountPercentage,
              rating,
              stock,
              brand,
              category,
              thumbnail,
              images,
              quantity,
            };
            const { status } = await validateItem(
              "bag",
              item,
              loginDetails.email
            );
            
            await removeBagItem("wishlist", id);
            updateState();


            toast({
              title: "DONE",
              description: "Added Successfully",
              status: "success",
              duration: 1500,
              isClosable: true,
            });
          }}
        >
          Add To Bag
        </Button>
      </Td>
    </Tr>
  );
};

export default BagContainer;
