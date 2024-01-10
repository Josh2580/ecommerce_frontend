import React from "react";
import {
  useCreateCartMutation,
  useCreateCartItemsMutation,
} from "../source/api/CartApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../source/storage/CartSlice";

export const AddToCartHandler = ({ prodId, prodQty, navCart }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // This is for Adding to Cart Management
  // This is for Adding to Cart Management
  const [createCart] = useCreateCartMutation();
  const [addToCartItems] = useCreateCartItemsMutation();

  const cartInfo = useSelector((state) =>
    state.cart ? state.cart.cartId : ""
  );
  const CreateCartHandler = async () => {
    // console.log("productId: ", prodId);
    // console.log("quantity: ", prodQty);
    // console.log(cartInfo);

    //   FormData: for Creating CART
    const formData = new FormData();
    // formData.append("owner", "");
    // CartItems_FormData: for Creating CART ITEMS
    const cartItemFormData = new FormData();
    cartItemFormData.append("product_id", prodId);
    cartItemFormData.append("quantity", prodQty);
    //    Create New Cart if there's no Cart_Id in State and vice_versa
    if (!cartInfo) {
      console.log(cartInfo);
      let cartResult = await createCart({ formData });
      let cartId = cartResult.data.id;
      console.log(cartResult);
      dispatch(addToCart({ cart_id: cartId }));
      let newCartItemResult = await addToCartItems({
        formData: cartItemFormData,
        id: cartId,
      });
      // console.log(newCartItemResult);

      if (newCartItemResult) {
        // console.log("New Cart Created");
        // console.log(newCartItemResult);

        {
          navCart && navigate(`/cart`);
        }
      }
      // console.log(newCartItemResult);
    } else {
      // console.log("This is Else");
      let cartItemResult = await addToCartItems({
        formData: cartItemFormData,
        id: cartInfo.cart_id,
      });
      if (cartItemResult) {
        {
          navCart && navigate(`/cart`);
        }

        // console.log(cartItemResult);
        // console.log("Add item to existing cart");
      }
    }
  };
  return <div onClick={() => CreateCartHandler()}>Add To Cart</div>;
};
