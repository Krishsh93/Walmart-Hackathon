import {
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBox = () => {
  return (
    <div className="SearchBox">
      <Stack spacing={4}>
        <InputGroup>
          <InputRightElement pointerEvents="none" id="RightElement">
            <SearchIcon color="white" />
          </InputRightElement>
          <Input
            type="text"
            placeholder="Search everything at Walmart online and in store"
            _hover={{ borderColor: "orange" }}
          />
        </InputGroup>
      </Stack>
    </div>
  );
};

export default SearchBox;
