import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Details from "../Pages/Details/Details";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/campaign/:id",
        element: <Details></Details>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default myCreatedRoute;
