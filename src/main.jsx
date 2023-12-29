import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./source/store.jsx";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
// import "../node_modules/react-bootstrap/dist/react-bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
{
  /* <script
  src="
https://cdn.jsdelivr.net/npm/react-bootstrap@2.9.1/dist/react-bootstrap.min.js
"
></script>; */
}
{
  /* <script
  src="
../node_modules/react-bootstrap/dist/react-bootstrap.js
"
></script>; */
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <RouterProvider router={App} />
    </Provider>
  </React.StrictMode>
);
