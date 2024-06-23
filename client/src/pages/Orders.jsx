import { Box, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emptyBag } from "../redux/actions/empty.bag";
import { useDispatch, useSelector } from "react-redux";
import { updateAddress } from "../redux/actions/update.address";

const Orders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginDetails = useSelector((store) => store.login);

  useEffect(() => {
    emptyBag(loginDetails.email);
    dispatch(updateAddress(loginDetails.email, undefined));

    setTimeout(() => {
      navigate("/shopping");
    }, 3000);
  }, []);

  return (
    <Box className="Orders">
      <Text className="goBack" onClick={() => navigate("/shopping")}>
        GO BACK
      </Text>

      <Image
        src="https://cdn.dribbble.com/users/2572904/screenshots/17169793/media/ed801ffe0fbeb4b95ca246ba1f5ea398.gif"
        alt="OrderPlaced"
        w={"50%"}
        m={"auto"}
      />
    </Box>
  );
};

export default Orders;
