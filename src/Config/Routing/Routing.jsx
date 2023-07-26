import { createBrowserRouter } from "react-router-dom";
import Navbar from "../../components/navbar";
import App from "../../App";
import Create from "../../components/create";
import Bobot from "../../components/bobot";
import Update from "../../components/EditBobot";

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
  {
    path: "/bobot",
    element: <Bobot />,
  },
  {
    path: "/update",
    element: <Update />,
  },
]);
