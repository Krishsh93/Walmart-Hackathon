import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import LoginForm from "../components/Login/LoginForm";
import RegisterForm from "../components/Login/RegisterForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="Login">
      <Text className="goBack" onClick={() => navigate("/shopping")}>
        GO BACK
      </Text>

      <Tabs fontFamily={"Poppins"} className="Tabs" variant="enclosed">
        <TabList>
          <Tab fontSize={"19px"} fontWeight={"bold"}>
            Sign in
          </Tab>
          <Tab fontSize={"19px"} fontWeight={"bold"}>
            Register
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <LoginForm />
          </TabPanel>
          <TabPanel>
            <RegisterForm />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Box className="LoginBottom" fontFamily={"Poppins"}>
        <b>WALMART</b>
      </Box>
    </div>
  );
};

export default Login;
