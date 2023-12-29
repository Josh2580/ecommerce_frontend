import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import Root from "./components/Root/Root";
import PrivateRoute from "./components/Root/PrivateRoute";

import ErrorPage from "./components/Root/ErrorPage";

//PAGES
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import CategoryPage from "./pages/CategoryPage";
//

import "./App.css";

import Orders from "./pages/Customers/Orders";
import OrderDetails from "./pages/OrderDetails";

//Customers Panel
import RegisterPage from "./pages/Customers/RegisterPage";
import LoginPage from "./pages/Customers/LoginPage";
import UsersDashboard from "./pages/Customers/UsersDashboard";
import ChangePassword from "./pages/Customers/ChangePassword";
import Profile from "./pages/Customers/Profile";
import Address from "./pages/Customers/Address";
import Wishlist from "./pages/Customers/Wishlist";

//Sellers Panel
import SellersLoginPage from "./pages/sellers/SellersLoginPage";
import SellersRegisterPage from "./pages/sellers/SellersRegisterPage";
import SellersDashboard from "./pages/sellers/SellersDashboard";
import SellersProducts from "./pages/sellers/SellersProducts";
import AddProduct from "./pages/sellers/AddProduct";
import SellersOrders from "./pages/sellers/SellersOrders";
import SellersCustomers from "./pages/sellers/SellersCustomers";
import SellersReport from "./pages/sellers/SellersReport";
import SellersChangePassword from "./pages/sellers/SellersChangePassword";
import AddCategoryPage from "./pages/AddCategoryPage";

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      // loader={rootLoader}
      // action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route index element={<HomePage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/checkout/:cartId" element={<CheckoutPage />} />
      </Route>
      <Route
        path="product/:productId/:catyId"
        element={<ProductDetailsPage />}
      />
      <Route path="category/:categoryId" element={<CategoryPage />} />
      <Route path="category/add" element={<AddCategoryPage />} />

      <Route path="cart/:cartId" element={<CartPage />} />
      <Route path="/order/success" element={<OrderDetails />} />
      <Route path="/store" element={<StorePage />} />

      {/* Customers Panel */}
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/customer/login" element={<LoginPage />} />
      <Route path="/customer/dashboard/orders" element={<Orders />} />
      <Route path="/customer/dashboard" element={<UsersDashboard />} />
      <Route path="/customer/change-password" element={<ChangePassword />} />
      <Route path="/customer/profile" element={<Profile />} />
      <Route path="/customer/address" element={<Address />} />
      <Route path="/customer/wishlist" element={<Wishlist />} />

      {/* Sellers Panel */}
      <Route path="/seller/login" element={<SellersLoginPage />} />
      <Route path="/seller/register" element={<SellersRegisterPage />} />
      <Route path="/seller/dashboard" element={<SellersDashboard />} />
      <Route path="/seller/products" element={<SellersProducts />} />
      <Route path="/seller/add-products" element={<AddProduct />} />
      <Route path="/seller/orders" element={<SellersOrders />} />
      <Route path="/seller/customers" element={<SellersCustomers />} />
      <Route path="/seller/reports" element={<SellersReport />} />
      <Route
        path="/seller/change-password"
        element={<SellersChangePassword />}
      />
      <Route path="/seller/profile" element={<Profile />} />

      {/* <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
      </Route> */}
    </Route>
  )
);

export default App;
