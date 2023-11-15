import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home/Home";
import AllJobs from "../Components/AllJobs/AllJobs";
import Help from "../Components/Help/Help";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/alljobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/help",
        element: <Help></Help>,
      },
    ],
  },
]);

export default routes;