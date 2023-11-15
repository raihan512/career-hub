import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home/Home";
import AllJobs from "../Components/AllJobs/AllJobs";
import Help from "../Components/Help/Help";
import JobDetails from "../Components/JobDetails/JobDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/help",
        element: <Help></Help>,
      },
      {
        path: "/jobdetails",
        element: <JobDetails></JobDetails>,
      },
    ],
  },
]);

export default routes;
