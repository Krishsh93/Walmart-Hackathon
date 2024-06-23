import { Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAddress } from "../../redux/actions/update.address";

const Address = () => {
  const dispatch = useDispatch();
  const loginDetails = useSelector((store) => store.login);
  const addressDetails = useSelector((store) => store.addressDetails);

  const [done, setDone] = useState(false);

  const [address, setAddress] = useState({
    name: undefined,
    city: undefined,
    district: undefined,
    state: undefined,
    pin: undefined,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateAddress(loginDetails.email, address));
    setDone(true);

    setTimeout(() => {
      setDone(false);
    }, 1000);
  };

  if (addressDetails.status)
    return (
      <Text color={"yellow"} textAlign={"center"}>
        <b>Address Added. Goto Payments.</b>
      </Text>
    );

  return (
    <Box className="Address">
      <form>
        <FormControl isRequired>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={address.name}
          />
        </FormControl>

        <FormControl isRequired>
          <Input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
            value={address.city}
          />
        </FormControl>

        <FormControl isRequired>
          <Input
            type="text"
            name="district"
            placeholder="District"
            onChange={handleChange}
            value={address.district}
          />
        </FormControl>

        <FormControl isRequired>
          <Input
            type="text"
            name="state"
            placeholder="State"
            onChange={handleChange}
            value={address.state}
          />
        </FormControl>

        <FormControl isRequired>
          <Input
            type="number"
            name="pin"
            placeholder="Pin"
            onChange={handleChange}
            value={address.pin}
          />
        </FormControl>

        <Button
          colorScheme="facebook"
          w={"100%"}
          type="submit"
          isDisabled={
            address.name && address.city && address.district && address.pin
              ? false
              : true
          }
          onClick={handleSubmit}
        >
          Add Delivery Address
        </Button>

        <Flex textAlign={"center"} direction={"column"}>
          <Text mt={3} color={"yellow"}>
            <b>Once Done. Add Payment Details.</b>
          </Text>

          <Text color={"whitesmoke"}>
            {done ? <b>Address Added. Goto Payment.</b> : null}
          </Text>
        </Flex>
      </form>
    </Box>
  );
};

export default Address;
