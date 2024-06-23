import { Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomeBelowBody = () => {
  return (
    <div className="HomeBelowBody">
      <Button colorScheme="green">
        <Link to={"/shopping"}>SHOP NOW</Link>
      </Button>
      <Text>25% OFF SELECTED STYLES!</Text>
      <Text>
        With code: <span>TREATY_A_SELF</span>
      </Text>
      <Text>
        See website banner for Ts&Cs. Selected marked products excluded from
        promo.
      </Text>
    </div>
  );
};

export default HomeBelowBody;
