/* eslint-disable react/prop-types */

import { Button, useToast } from "@chakra-ui/react";
import { validateItem } from "../../redux/actions/validate_item";
import { useSelector } from "react-redux";

const AddItem = ({ item }) => {
  const toast = useToast();

  const loginDetails = useSelector((store) => store.login);

  return (
    <div className="SuccessErrorToast">
      <Button
        fontFamily={"Poppins"}
        colorScheme="facebook"
        onClick={async () => {
          const { status } = await validateItem(
            "wishlist",
            item,
            loginDetails.email
          );

          toast({
            title: status ? "DONE" : "OOPS !",
            description: status
              ? "Added Successfully"
              : "Already in the wishlist",
            status: status ? "success" : "error",
            duration: 1500,
            isClosable: true,
          });
        }}
      >
        Add To Wishlist
      </Button>

      <Button
        colorScheme="whatsapp"
        onClick={async () => {
          const { status } = await validateItem(
            "bag",
            item,
            loginDetails.email
          );

          toast({
            title: status ? "DONE" : "OOPS !",
            description: status ? "Added Successfully" : "Already in the bag",
            status: status ? "success" : "error",
            duration: 1500,
            isClosable: true,
          });
        }}
      >
        Add To Bag
      </Button>
    </div>
  );
};

export default AddItem;
