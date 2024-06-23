import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/actions/register.user";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const loginDetails = useSelector((store) => store.login);
  const newUser = useSelector((store) => store.newUser);

  const [info, setInfo] = useState(false);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { type, value } = event.target;
    setCredentials({ ...credentials, [type]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser(credentials));
    setInfo(true);
    setTimeout(() => {
      setInfo(false);
    }, 1500);
  };

  if (loginDetails.access_token) {
    return (
      <Text color={"red"} textAlign={"center"}>
        <b>Please Logout First</b>
      </Text>
    );
  }

  return (
    <Box>
      <form>
        <FormControl isRequired>
          <FormLabel>Email Address:</FormLabel>
          <Input
            value={credentials.email}
            type="email"
            placeholder="Enter Email Address"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password:</FormLabel>
          <Input
            value={credentials.password}
            type="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
        </FormControl>
        <Button
          colorScheme="green"
          w={"100%"}
          fontWeight={"semibold"}
          type="submit"
          onClick={handleSubmit}
          isDisabled={credentials.email && credentials.password ? false : true}
        >
          Register
        </Button>

        <Text color={"red"} mt={2} textAlign={"center"}>
          <b>{info ? newUser.message : null}</b>
        </Text>
      </form>
    </Box>
  );
};

export default RegisterForm;
