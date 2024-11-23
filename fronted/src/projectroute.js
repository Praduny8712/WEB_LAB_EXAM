import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import ShowTV from "./components/ShowTv";
import AddTv from "./components/AddTv";
import DeleteData from "./components/DeleteData";


const projectroute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "showtvpage",
        element: <ShowTV />,
      },
      {
        path: "addtvpage",
        element: <AddTv />,
      },
      {
        path: "deletepage",
        element: <DeleteData />,
      },
    ],
  },
]);

export default projectroute;
