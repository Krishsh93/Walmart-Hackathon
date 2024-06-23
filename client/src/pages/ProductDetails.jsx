import { Link, useParams } from "react-router-dom";
import SingleProductCard from "../components/ProductDetails/SingleProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../redux/actions/get_single_product";
import AddItem from "../components/ProductDetails/AddItem";
import { Text } from "@chakra-ui/react";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((store) => store.singleProduct);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);

  return (
    <div className="ProductDetails">
      <Text className="goBack" onClick={() => history.back()}>GO BACK</Text>

      <SingleProductCard key={id} {...product.productDetails[0]} />

      <AddItem item={product.productDetails[0]} />
    </div>
  );
};

export default ProductDetails;
