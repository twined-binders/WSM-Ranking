import { createBrowserRouter } from "react-router-dom";
import Navbar from "../../components/navbar";
import App from "../../App";
import Create from "../../components/create";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/hasil",
    element: <App />,
  },
  {
    path: "/create",
    element: <Create />,
  },
]);
