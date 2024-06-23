import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePayment } from "../../redux/actions/update.payment";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const dispatch = useDispatch();

  const loginDetails = useSelector((store) => store.login);
  const addressDetails = useSelector((store) => store.addressDetails);
  const navigate = useNavigate();

  const [payment, setPayment] = useState({
    card_holder_name: undefined,
    card_number: undefined,
    month: undefined,
    year: undefined,
    cvv: undefined,
  });

  const { card_holder_name, card_number, month, year, cvv } = payment;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPayment({
      ...payment,
      [name]: name === "card_holder_name" ? value : Number(value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (card_holder_name && card_number && year && month && cvv) {
      dispatch(updatePayment(loginDetails.email, payment));
      navigate('/orders');
    }
  };


  if (!addressDetails.status)
    return (
      <Text color={"yellow"} textAlign={"center"}>
        <b>Add Address Details First</b>
      </Text>
    );

  return (
    <div className="Payment">
      <form>
        <FormControl isRequired>
          <FormLabel>Card Number:</FormLabel>
          <Input
            type="number"
            placeholder="Card Number"
            value={card_number}
            name="card_number"
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Card Holder Name:</FormLabel>
          <Input
            type="text"
            placeholder="Card Holder Name"
            value={card_holder_name}
            name="card_holder_name"
            onChange={handleChange}
          />
        </FormControl>

        <Flex direction={["column", "row"]} gap={3}>
          <FormControl isRequired>
            <FormLabel>Month</FormLabel>
            <Input
              type="number"
              placeholder="MM"
              onChange={handleChange}
              value={month}
              name="month"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Year:</FormLabel>
            <Input
              type="number"
              placeholder="YY"
              onChange={handleChange}
              value={year}
              name="year"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>CVV:</FormLabel>
            <Input
              type="number"
              placeholder="CVV"
              onChange={handleChange}
              value={cvv}
              name="cvv"
            />
          </FormControl>
        </Flex>

        <Button
          w={"100%"}
          type={"submit"}
          colorScheme="facebook"
          onClick={handleSubmit}
          isDisabled={
            card_holder_name && card_number && year && month && cvv
              ? false
              : true
          }
        >
          Pay Now
        </Button>
      </form>

      <Text textAlign={"center"} mt={3} color={"yellow"}>
        <b>All fields are mandatory.</b>
      </Text>
    </div>
  );
};

export default Payment;
