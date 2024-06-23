import {
  Box,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Payment from "../components/CheckOut/Payment";
import Address from "../components/CheckOut/Address";

const CheckOut = () => {
  return (
    <div className="CheckOut">
      <Text className="goBack" onClick={() => history.back()}>
        GO BACK
      </Text>

      <Tabs fontFamily={"Poppins"} className="CheckOutTabs" variant="enclosed">
        <TabList>
          <Tab fontSize={"19px"} fontWeight={"bold"}>
            Delivery Details
          </Tab>

          <Tab fontSize={"19px"} fontWeight={"bold"}>
            Payment Details
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Address />
          </TabPanel>

          <TabPanel id="Payment">
            <Payment />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Box color={"black"} className="LoginBottom" fontFamily={"Poppins"}>
        <b>WALMART</b>
      </Box>
    </div>
  );
};

export default CheckOut;
