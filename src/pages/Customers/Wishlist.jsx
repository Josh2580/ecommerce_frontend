import React from "react";
import { AccHeader, UserDiv } from "./UsersDashboard";
import { AccountMainHeader } from "./AccountHeader";

import { styled } from "styled-components";
import Product1 from "../../assets/product-1.jpg";
import Product2 from "../../assets/product-2.jpg";
import { SelectStyled } from "../../components/select/Select";
import { ButtonStyle } from "../../components/myModules/Button";
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "Kids School Bag /Backpack and more",
    image: Product1,
    color: "blue",
    size: " medium",
    price: 1000,
    quantity: 1,
  },
  {
    name: "Adult clothinf and accessories",
    image: Product2,
    color: "pink",
    size: " large",
    price: 2000,
    quantity: 2,
  },
];

const Wishlist = () => {
  return (
    <UserDiv>
      <AccHeader>
        <AccountMainHeader />
      </AccHeader>
      <CartStyle>
        <h2>Wishlist</h2>
        <CartBody>
          <CartDetails>
            <div className="header">
              <p className="proDetails">Product Details</p>
              <p className="proQty">Quantity</p>
              <p className="proQty">Stock Status</p>

              <p className="proPrice">Price</p>
              <p className="proAction">Action</p>
            </div>
            <div className="productsInfo ">
              {products.map((prod) => (
                <div className="eachProd">
                  <div className="basicInfo">
                    <img src={prod.image} alt={prod.name} />
                    <div className="prodVariant ">
                      <p className="prodName ">{prod.name}</p>
                      <p>color: {prod.color}</p>
                      <p>size: {prod.size}</p>
                    </div>
                  </div>

                  <p className="proQty">
                    {/* {prod.quantity} */}
                    <QtySelectStyled>
                      {/* Arrray Constructor for changing the QTY to an array of Numbers*/}
                      {[...Array(prod.quantity).keys()].map((x) => (
                        <option key={x} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </QtySelectStyled>
                  </p>
                  <p className="proQty">In Stock</p>
                  <p className="proPrice">{prod.price}</p>

                  <div className="proAction">
                    <p className="remove">Add to Cart</p>
                    <p className="save">View Product</p>
                  </div>
                </div>
              ))}
            </div>
          </CartDetails>
        </CartBody>
      </CartStyle>
    </UserDiv>
  );
};

const CartStyle = styled.div`
  /* padding: 5rem; */
  h2 {
    text-align: center;
  }
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
      /* background: #ebd2b1; */
      width: 100px;
      text-align: center;
      .remove,
      .save {
        color: #e42f2f;
        font-size: 14px;
        padding-bottom: 5px;
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
      flex-direction: column;
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
          gap: 0.5rem;
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
        .remove,
        .save {
          color: #e42f2f;
          font-size: 14px;
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

const QtySelectStyled = styled(SelectStyled)`
  width: 100%;
`;

export default Wishlist;
