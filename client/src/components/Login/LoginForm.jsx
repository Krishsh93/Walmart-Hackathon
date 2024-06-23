import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/login";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const [info, setInfo] = useState(false);

  const dispatch = useDispatch();
  const login = useSelector((store) => store.login);

  const handleChange = (event) => {
    const { type, value } = event.target;
    setCredentials({ ...credentials, [type]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(credentials));
    setInfo(true);
    setTimeout(() => {
      setInfo(false);
    }, 1500);
  };

  if (login.access_token)
    return (
      <Center>
        <Button
          colorScheme="red"
          onClick={() =>
            dispatch(loginUser({ email: undefined, password: undefined }))
          }
        >
          LOGOUT
        </Button>
      </Center>
    );

  return (
    <div className="LoginForm">
      <form>
        <FormControl isRequired>
          <FormLabel>Email:</FormLabel>
          <Input
            type="email"
            placeholder="Enter Email Address"
            value={credentials.email}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Password:</FormLabel>
          <Input
            type="password"
            placeholder="Enter Password"
            value={credentials.password}
            onChange={handleChange}
          />
        </FormControl>

        <Button
          fontWeight={"semibold"}
          type="submit"
          w={"100%"}
          colorScheme="facebook"
          onClick={handleSubmit}
        >
          Log in
        </Button>
      </form>

      <Text color={"red"} textAlign={"center"} mt={2}>
        {info ? login.message : null}
      </Text>
    </div>
  );
};

export default LoginForm;
