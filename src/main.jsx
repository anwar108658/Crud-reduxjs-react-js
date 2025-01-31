// index.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./page/Home.jsx";
import AllPost from "./page/AllPost.jsx";
import Update from "./page/Update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Use App as the layout for nested routes
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/read",
        element: <AllPost />,
      },
      {
        path: "/update/:id",
        element: <Update/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
