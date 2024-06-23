import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePageBody = () => {
  return (
    <Flex className="HomePageBody" gap={6}>
      <Flex direction={"column"} gap={6}>
        <Link>
          <Image
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-9245/k2-_54011f79-10d8-491c-be3a-c344570253f4.v1.jpg?odnHeight=512&odnWidth=770&odnBg=&odnDynImageQuality=70"
            alt="Jewelry"
          />
          <Box>
            <Text>{`Jewelry & more she'll adore`}</Text>
            <Text>Shop Now</Text>
          </Box>
        </Link>

        <Link>
          <Image
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-74c9/k2-_b6d48320-41ce-4f9b-80c9-3263dc02300c.v1.jpg?odnHeight=1156&odnWidth=770&odnBg=&odnDynImageQuality=70"
            alt="Celebrate Mom"
          />
          <Box>
            <Text>Summer savings are so on</Text>
            <Text>Shop All</Text>
          </Box>
        </Link>

        <Link>
          <Image
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-e3bc/k2-_08cd4f86-11cd-493e-a0c4-2dbebbadae5e.v1.jpg?odnHeight=432&odnWidth=770&odnBg=&odnDynImageQuality=70"
            alt="Celebrate Mom"
          />
          <Box>
            <Text>For the home chef</Text>
            <Text>Shop kitchen</Text>
          </Box>
        </Link>
      </Flex>

      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem colSpan={2}>
          <Link>
            <Image
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-a34b/k2-_b1e03b3b-fbbb-4d19-a9bf-a5d7a1c3c192.v1.jpg?odnHeight=447&odnWidth=794&odnBg=&odnDynImageQuality=70"
              alt="Celebrate Mom"
            />
            <Box>
              <Text>Celebrate all moms</Text>
              <Text>Shop Gifts</Text>
            </Box>
          </Link>
        </GridItem>

        <GridItem>
          <Link>
            <Image
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-4fa3/k2-_fbd4bff1-e2d0-4f44-99db-1617ca3aeac1.v1.jpg?odnHeight=776&odnWidth=770&odnBg=&odnDynImageQuality=70"
              alt="Celebrate Mom"
            />
            <Box>
              <Text>To mama, with love</Text>
              <Text>Shop cards</Text>
            </Box>
          </Link>
        </GridItem>

        <GridItem>
          <Link>
            <Image
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-5edd/k2-_0c3c40ea-a699-4797-8ec8-398a54c2c0eb.v1.jpg?odnHeight=776&odnWidth=770&odnBg=&odnDynImageQuality=70"
              alt="Celebrate Mom"
            />
            <Box>
              <Text>Upto 50% off</Text>
              <Text>Shop now</Text>
            </Box>
          </Link>
        </GridItem>

        <GridItem colSpan={2}>
          <Link>
            <Image
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-21d7/k2-_010ce435-9cfa-4871-98d9-b58993dee070.v1.jpg?odnHeight=432&odnWidth=1588&odnBg=&odnDynImageQuality=70"
              alt="Celebrate Mom"
            />
            <Box>
              <Text width={"551px"}>
                Walmart+ members save big with free delivery from stores
              </Text>
              <Text>Join Walmart+</Text>
            </Box>
          </Link>
        </GridItem>
      </Grid>

      <Flex direction={"column"} gap={6}>
        <GridItem>
          <Link>
            <Image
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-834d/k2-_3c696555-b959-4a78-b12c-abe0eff45511.v1.jpg?odnHeight=432&odnWidth=770&odnBg=&odnDynImageQuality=70"
              alt="Celebrate Mom"
            />
            <Box>
              <Text>Celebrate all moms</Text>
              <Text>Shop Gifts</Text>
            </Box>
          </Link>
        </GridItem>

        <GridItem>
          <Link>
            <Image
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-f4df/k2-_cd64f289-ac82-4193-8f09-bf372cc13dc3.v1.jpg?odnHeight=512&odnWidth=770&odnBg=&odnDynImageQuality=70"
              alt="Celebrate Mom"
            />
            <Box>
              <Text>Celebrate all moms</Text>
              <Text>Shop Gifts</Text>
            </Box>
          </Link>
        </GridItem>

        <GridItem>
          <Link>
            <Image
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-4b0a/k2-_951b0c63-3672-431e-b75f-f2ff3aa18c64.v1.jpg?odnHeight=1156&odnWidth=770&odnBg=&odnDynImageQuality=70"
              alt="Celebrate Mom"
            />
            <Box>
              <Text>Celebrate all moms</Text>
              <Text>Shop Gifts</Text>
            </Box>
          </Link>
        </GridItem>
      </Flex>
    </Flex>
  );
};

export default HomePageBody;
