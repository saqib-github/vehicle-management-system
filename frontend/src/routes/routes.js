import React from "react";
const Home = React.lazy(() => import("../pages/home/index"));
const Login = React.lazy(() => import("../pages/login/index"));
const SignUp = React.lazy(() => import("../pages/signup/index"));
const Dashboard = React.lazy(() => import("../pages/dashboard/index"));

const Component404 = React.lazy(() => import("../layouts/c404/Component404"));

const routes = [
  { path: "*", exact: true, name: "404", component: Component404 },
  { path: "/", exact: true, name: "Home", component: Home },

  // .............admin routes and need to protect them
  {
    path: "/login",
    exact: true,
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    exact: true,
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/dashboard",
    exact: true,
    name: "Dashboard",
    component: Dashboard
  }
];
export default routes;
