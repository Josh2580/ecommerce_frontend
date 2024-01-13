import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { SelectStyled } from "../components/select/Select";
import { ButtonStyle } from "../components/myModules/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  useGetCartItemsFromIdQuery,
  useGetCartByIdQuery,
  useUpdateCartItemsMutation,
  useRemoveCartItemsMutation,
  useUpdateCartMutation,
} from "../source/api/CartApi";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const userData = useSelector((state) => state.auth.userInfo || "");
  // console.log(userData);
  const { isToken, userState } = useSelector((state) => state.auth);
  const { cartId } = useSelector((state) => state.cart);

  // console.log(userState, isToken);

  const state_cart_id = cartId.cart_id;
  const { data, isLoading, error } = useGetCartItemsFromIdQuery(state_cart_id);

  // console.log(data.length);

  const {
    data: CartData,
    isLoading: CartIsLoading,
    error: CartError,
  } = useGetCartByIdQuery(state_cart_id);

  const [updateCartItemsApi] = useUpdateCartItemsMutation();
  const [updateCartApi, { data: cartOwnerData }] = useUpdateCartMutation();
  const [removeCartItem] = useRemoveCartItemsMutation();

  // setInterval(() => {
  //   console.log("Timeout funtion");
  // }, 3000);

  const UpdateCartItemHandler = (e) => {
    let item_id = e.target.id;
    let cart_updated = e.target.value;

    const formData = new FormData();
    formData.append("quantity", cart_updated);

    // console.log("item_id: ", item_id);
    // console.log("cart_updated: ", cart_updated);

    updateCartItemsApi({ formData, cart_id: state_cart_id, item_id: item_id });
  };

  //
  //
  const formData = new FormData();
  formData.append("owner", "");

  const removeCartItemHandler = ({ prod }) => {
    // console.log("item removed");
    // console.log(prod.id);
    removeCartItem({ cart_id: prod.cart, item_id: prod.id });
  };

  const ChechoutHandler = () => {
    if (CartData) {
      CartData.items.map((data) => {
        // console.log(data.product);
        // console.log(data);
        navigate(`/checkout`);
      });
    }
    toast(`Empty Cart !!!`);
  };

  let { owner } = CartData || {};

  useEffect(() => {
    if (isToken && userState && (owner === null || {})) {
      const formData = new FormData();
      formData.append("owner", userState.id);
      updateCartApi({ cartId, formData });
      // console.log("Updating owner");
    }
  }, [isToken, userState, owner]);

  return (
    <CartStyle>
      <h6 onClick={() => navigate("/")} className="text-success px-1 mb-3">
        Continue Shopping
      </h6>
      <CartBody>
        <ToastContainer />

        <CartDetails>
          <div className="header bg-success text-white">
            <p className="proDetails">Product Details</p>
            <p className="proQty">Quantity</p>
            <p className="proPrice">Price</p>
            <p className="proAction">Action</p>
          </div>
          <div className="productsInfo fw-bold">
            {/* {CartData &&
              CartData.items.map((prod, i) => ( */}
            {data &&
              data.map((prod, i) => (
                <div className="eachProd" key={i}>
                  <div className="basicInfo">
                    <img src={prod.product.image} alt={prod.product.title} />
                    <div className="prodVariant d-flex flex-column gap-0 h-0">
                      <p className="prodName m-0">{prod.product.title}</p>
                      <p>Unit Price: {prod.product.price}</p>
                    </div>
                  </div>

                  <p className="proQty m-0">
                    <QtySelectStyled
                      id={prod.id}
                      onChange={(e) => UpdateCartItemHandler(e)}
                    >
                      {/* Arrray Constructor for changing the QTY to an array of Numbers*/}
                      <option>{prod.quantity}</option>
                      {[...Array(prod.product.quantity).keys()].map((x) => (
                        <option key={x} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </QtySelectStyled>
                  </p>
                  <p className="proPrice m-0">{prod.sub_total}</p>

                  <div className="proAction">
                    <p
                      className="remove border-0 border-warning text-warnin fw-bold m-0"
                      onClick={() => removeCartItemHandler({ prod: prod })}
                    >
                      Remove item
                    </p>
                    {/* <p className="save">Save for Later</p> */}
                  </div>
                </div>
              ))}
          </div>
        </CartDetails>
        <CartSummary>
          <div className="header">
            <p>Order Summary</p>
            {data && <p>{data.length} items</p>}
          </div>
          <div className="delivery">
            <p>Delivery Charges</p>
            <p id="DLV">
              Delivery charges will be made available during checkout
            </p>
          </div>

          <div className="subTotal">
            <p>SubTotal</p>

            {CartData && CartData.grand_total}
          </div>
          <div className="total">
            <p>Total</p>
            {CartData && CartData.grand_total}
          </div>
          <ButtonStyle
            className="bg-success text-white border-0 w-100"
            onClick={() => ChechoutHandler()}
          >
            Checkout
          </ButtonStyle>
        </CartSummary>
      </CartBody>
    </CartStyle>
  );
};

const CartStyle = styled.div`
  /* padding: 5rem; */
`;

const CartBody = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const CartDetails = styled.div`
  flex: 5;
  /* background: #eee7e7; */
  box-shadow: 0px 4px 7px 1px #dbdbdb;

  .header,
  .productsInfo {
    display: flex;
    background: #e2f0a6;
    justify-content: space-between;

    gap: 1rem;
    padding: 0.5rem 1rem;
    p {
      font-weight: bold;
      /* padding: 0.5rem 1rem; */
    }
    .proDetails {
      width: 350px;
    }
    .proQty,
    .proPrice,
    .proAction {
      width: 100px;
      text-align: center;
      .remove {
        font-size: 14px;
        /* margin-bottom: 5px; */
        padding: 0px;
        color: #fcbf06;

        &:hover {
          background: #fcbf06;
          border-radius: 5px;
          color: white;
        }
      }

      .save {
        font-size: 14px;
        /* margin-bottom: 5px; */
        padding: 3px;

        &:hover {
          background: blueviolet;
          border-radius: 5px;
          color: white;
        }
      }
    }
  }

  .productsInfo {
    flex-direction: column;
    padding: 1rem 1rem;
    /* display: flex; */
    background: none;

    gap: 1rem;

    .eachProd {
      display: flex;
      border-top: 1px solid #cfcdcd;
      padding-top: 1rem;
      gap: 1rem;
      align-items: center;
      justify-content: space-between;

      .basicInfo {
        display: flex;
        width: 350px;
        /* align-items: center; */
        /* justify-content: space-between; */
        gap: 0.5rem;
        /* .prodVariant {
          display: flex;
          flex-direction: column;
        } */
      }
      .prodName {
        padding-bottom: 10px;
      }
    }
    p {
      font-weight: lighter;
      padding: 0rem;
    }
    img {
      max-width: 100px;
    }
  }

  @media (max-width: 700px) {
    /* background: goldenrod; */
    .header {
      display: none;
    }
    .productsInfo {
      /* flex-direction: column; */
      padding: 1rem 1rem;
      /* display: flex; */
      background: none;

      gap: 1rem;

      .eachProd {
        display: flex;
        border-top: 1px solid #cfcdcd;
        padding-top: 1rem;
        gap: 0.5rem;
        /* background-color: #f18888; */
        flex-direction: column;
        align-items: flex-start;

        .basicInfo {
          display: flex;
          width: fit-content;
          /* gap: 0.5rem; */
          /* background-color: #f18888; */
        }
        .prodName {
          padding-bottom: 10px;
        }
        .proAction {
          display: flex;
          width: fit-content;
          gap: 1rem;
        }
        .proQty,
        .proPrice {
          /* background: #ebd2b1; */
          width: 100px;
          text-align: left;
          padding: 0px;
        }
      }
      p {
        font-weight: lighter;
        padding: 0rem;
      }
      img {
        max-width: 100px;
      }
    }
  }
`;
const CartSummary = styled.div`
  flex: 2;
  padding: 1rem 1rem;
  box-shadow: 0px 4px 7px 1px #dbdbdb;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: fit-content;
  .header,
  .delivery,
  .subTotal,
  .total {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    border-bottom: 1px solid #c9c9c9;
    padding-bottom: 1rem;
    #DLV {
      text-align: right;
      font-size: 12px;
      max-width: 50%;
    }
  }
  .total {
    /* border: none; */
  }

  .total,
  .header {
    font-weight: bold;
    font-size: 16px;
  }
  .header {
    border-bottom: 1px solid black;
    padding: 0.5rem 0rem;
  }
`;

const QtySelectStyled = styled(SelectStyled)`
  width: 100%;
`;

// const CartStyle = styled.div``;

export default CartPage;
