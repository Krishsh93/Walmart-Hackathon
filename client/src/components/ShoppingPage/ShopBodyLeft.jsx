import { Box, Text } from "@chakra-ui/react";

const ShopBodyLeft = () => {
  return (
    <div className="ShopBodyLeft">
      <Box fontFamily={"Poppins"}>
        <Text>
          <b>Adjust Products</b>
        </Text>
        <form>
          <select name="sort" id="sort">
            <option value="">Sort by Rating</option>
            <option value="desc">Highest Rating First</option>
            <option value="asc">Lowest Rating First</option>
          </select>
        </form>

        <form>
          <select name="sort" id="sort">
            <option value="">Filter by Category</option>
            <option value="tops">Tops</option>
            <option value="home-decoration">Home Decoration</option>
            <option value="skincare">Skincare</option>
            <option value="womens-jewellery">Women Jewellery</option>
            <option value="smartphones">Smartphones</option>
            <option value="womens-dresses">Women Dresses</option>
            <option value="mens-watches">Men Watches</option>
            <option value="laptops">Laptops</option>
            <option value="womens-bags">Women Bags</option>
            <option value="automotive">Automotive</option>
            <option value="womens-shoes">Women Shoes</option>
            <option value="mens-shirts">Men Shirts</option>
            <option value="sunglasses">Sunglasses</option>
            <option value="groceries">Groceries</option>
            <option value="mens-shoes">Men Shoes</option>
            <option value="womens-watches">Women Watches</option>
            <option value="furniture">Furniture</option>
            <option value="fragrances">Fragrances</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="lighting">Lighting</option>
          </select>
        </form>
      </Box>
    </div>
  );
};

export default ShopBodyLeft;
