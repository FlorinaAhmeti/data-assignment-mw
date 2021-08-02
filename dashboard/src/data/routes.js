import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import DefaultLayout from "../components/Layout";

// Route Views
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Departments from "../pages/Departments";
import Visualizations from "../pages/Visualizations";

export default [
  {
    path: "/products",
    layout: DefaultLayout,
    component: Products,
  },
  {
    path: "/orders",
    layout: DefaultLayout,
    component: Orders,
  },
  {
    path: "/departments",
    layout: DefaultLayout,
    component: Departments,
  },
  {
    path: "/",
    layout: DefaultLayout,
    component: Visualizations,
  }
];
