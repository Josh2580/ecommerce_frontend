import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Bootstrap files
import {
  Container,
  Row,
  Col,
  Accordion,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
//
//

import ShippingAddress, {
  ShippingAddressStyle,
  Group,
} from "../components/address/ShippingAddress";
import PaymentMethodComp, {
  PaymentMethodStyle,
  PayGroup,
  Methods,
} from "../components/PaymentMethodComp";
import { styled } from "styled-components";
// import Product1 from "../assets/product-1.jpg";
// import Product2 from "../assets/product-2.jpg";
import { ButtonStyle } from "../components/myModules/Button";
// import { InputStyle } from "../components/myModules/Inputs";

import {
  // useGetCartItemsFromIdQuery,
  useGetCartByIdQuery,
  // useUpdateCartItemsMutation,
} from "../source/api/CartApi";
import {
  useCreateOrderAddressMutation,
  useCreateOrderMutation,
  useUpdateOrderPaymentMutation,
} from "../source/api/OrderApi";
import { useGetAddressQuery } from "../source/api/AddressApi";
import { usePayMutation } from "../source/api/PaymentApi";

import { Country, State, City } from "country-state-city";
import Address from "./Customers/Address";
//
//
import { useSelector, useDispatch } from "react-redux";
import { useGetUserProfileQuery } from "../source/api/authenticationApi";
import { userState } from "../source/storage/AuthSlice";
//

// console.log("All Countries", Country.getAllCountries());
// console.log("All States", State.getAllStates());
// console.log("Country by Code: ", Country.getCountryByCode("NG"));
// console.log("States by Country Code: ", State.getStatesOfCountry("NG"));
// console.log(
//   "Cities by Country and State Code ",
//   City.getCitiesOfState("NG", "AB"),
//   City.getCitiesOfState("NG", "LA"),
//   City.getCitiesOfState("NG", "FC")
// );
// console.log("Cities by Country Code ", City.getCitiesOfCountry("NG"));
// console.log("All Cities", City.getAllCities());

const CheckoutPage = () => {
  const { cartId } = useParams();
  const navigate = useNavigate();
  const { data: userData } = useGetUserProfileQuery() || {};
  // console.log(userData.id);

  const {
    data: CartItems,
    isLoading: CartIsLoading,
    error: CartError,
  } = useGetCartByIdQuery(cartId);
  const [pay, { data: payData, isSuccess: paySuccess }] = usePayMutation();

  const [
    createOrder,
    { data: createOrderData, isSuccess: createOrderSuccess },
  ] = useCreateOrderMutation();
  const [
    updateOrderPayment,
    { data: updateOrderPaymentData, isSuccess: updateOrderPaymentSuccess },
  ] = useUpdateOrderPaymentMutation();
  const [
    createOrderAddress,
    { data: orderAddressData, isSuccess: orderAddressSuccess },
  ] = useCreateOrderAddressMutation();
  // {
  //   orderAddressSuccess && console.log(orderAddressData);
  // }
  // {
  //   createOrderSuccess && console.log(createOrderData);
  // }

  const {
    data: AddressData,
    isLoading: AddressIsLoading,
    error: AddressError,
  } = useGetAddressQuery();

  const [validated, setValidated] = useState(false);

  const [inputData, setInputData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    address: "",
    descriptions: "",
    postal_code: "",
    city: "",
    state: "",
    country: "",
    lga: "",
    payment_method: "credit_card",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(inputData.first_name);
  };

  const formData = new FormData();

  Object.entries(inputData).forEach(([key, value]) => {
    formData.append(key, value);
    // console.log(value);
  });

  const handleSubmit = async (event) => {
    const cartFormData = new FormData();
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      console.log("Some field empty");
    } else {
      cartFormData.append("cart_id", cartId);
      let orderNow = await createOrder({ formData: cartFormData });
      // createOrder({ formData: cartFormData });
      if (orderNow) {
        const paymentFormData = new FormData();
        paymentFormData.append("payment_method", inputData.payment_method);
        updateOrderPayment({
          formData: paymentFormData,
          orderId: orderNow.data.order_id,
        });
        formData.append("user", userData.id);
        formData.append("order", orderNow.data.order_id);
        let orderAddressResult = await createOrderAddress({
          // createOrderAddress({
          formData,
          orderId: orderNow.data.order_id,
        });
        if (orderAddressResult) {
          let payResult = await pay({
            orderId: orderNow.data.order_id,
          });
          if (payResult) {
            const { link } = payResult.data.data;
            // console.log(payResult.data);
            console.log(link);
            window.location.href = `${link}`;
          }
        }
        // navigate("/");
      }
    }
    // setValidated(true);
  };

  useEffect(() => {
    {
      AddressData &&
        AddressData.map((abcd) =>
          Object.entries(abcd).forEach(([key, value]) => {
            setInputData((prevData) => ({
              ...prevData,
              [key]: value,
            }));
            // console.log(key);
          })
        );
    }
  }, [AddressData]);

  return (
    <Container
      as="form"
      style={{
        marginTop: "30px",
      }}
      onSubmit={handleSubmit}
    >
      <Row>
        <Col>
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey={"0"}>
              <Accordion.Header>
                <h5>Delivery Details</h5>
              </Accordion.Header>
              <Accordion.Body>
                <Form as="div" noValidate validated={validated}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue={inputData.first_name}
                        name="first_name"
                        onChange={handleInputChange}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue={inputData.last_name}
                        name="last_name"
                        onChange={handleInputChange}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustomUsername"
                    >
                      <Form.Label>Phone Number</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="number"
                          placeholder="Phone Number"
                          aria-describedby="inputGroupPrepend"
                          required
                          defaultValue={inputData.phone_number}
                          name="phone_number"
                          onChange={handleInputChange}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Phone Number.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      // as={Col}
                      md="6"
                      controlId="validationCustom01"
                    >
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Address"
                        defaultValue={inputData.address}
                        name="address"
                        onChange={handleInputChange}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      // as={Col}
                      md="6"
                      controlId="validationCustomDescription"
                    >
                      <Form.Label>Description (Optional) </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Additional instructions on delivery or address"
                        defaultValue={inputData.descriptions}
                        name="descriptions"
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="City"
                        required
                        defaultValue={inputData.city}
                        name="city"
                        onChange={handleInputChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="State"
                        required
                        defaultValue={inputData.state}
                        name="state"
                        onChange={handleInputChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Country"
                        required
                        defaultValue={inputData.country}
                        name="country"
                        onChange={handleInputChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Country.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h5>Payment Method</h5>
              </Accordion.Header>
              <Accordion.Body>
                <Form as="div">
                  <Form.Group className="mb-1">
                    <Form.Check // prettier-ignore
                      as="input"
                      required
                      type={"radio"}
                      id={`defaultCard`}
                      label={`Credit Card`}
                      defaultChecked
                      name="payment_method"
                      defaultValue={"credit_card"}
                      onChange={handleInputChange}
                    />
                    <Form.Check // prettier-ignore
                      as="input"
                      required
                      type={"radio"}
                      name="payment_method"
                      id={`defaultDirect`}
                      label={`Direct Bank Transfer`}
                      defaultValue={"direct_bank_transfer"}
                      onChange={handleInputChange}
                    />

                    <Form.Check // prettier-ignore
                      required
                      as="input"
                      type={"radio"}
                      name="payment_method"
                      id={`defaultCash`}
                      label={`Cash On Delivery`}
                      defaultValue={"cash_on_delivery"}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col lg="4">
          <OrderDetailsStyle>
            <p className="header">Order Details</p>
            {CartItems &&
              CartItems.items.map((prod) => (
                <div key={prod.id} className="eachProduct">
                  <div className="info">
                    <img
                      src={"http://127.0.0.1:8000" + prod.product.image}
                      alt={prod.product.title}
                    />
                    <div>
                      <p>{prod.product.title}</p>
                      <p>Qty: {prod.quantity}</p>
                    </div>
                  </div>
                  <p className="price">{prod.sub_total}</p>
                </div>
              ))}
            {CartItems && (
              <div className="eachProduct">
                <h3>Total:</h3>
                <h3>{CartItems.grand_total}</h3>
              </div>
            )}

            <ButtonStyle
              width="100%"
              // onClick={(event) => PlaceOrderHandler(event)}
            >
              Place Order
            </ButtonStyle>
          </OrderDetailsStyle>
        </Col>
      </Row>
    </Container>
  );
};

const OrderDetailsStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1rem 2rem 1rem;
  box-shadow: 0px 4px 7px 1px #dbdbdb;
  width: 100%;
  height: max-content;

  .header {
    font-size: 1.5rem;
    border-bottom: 1px solid black;
    padding-bottom: 0.5rem;
  }
  img {
    max-width: 80px;
  }
  .eachProduct {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    /* border-bottom: 1px solid #dfdada; */
    padding-bottom: 0.5rem;
  }
  .info {
    display: flex;
    gap: 0.5rem;
    flex: 4;
  }
  .price {
    flex: 1;
    /* background: yellowgreen; */
    text-align: right;
  }
`;

export default CheckoutPage;
