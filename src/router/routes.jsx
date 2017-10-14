import Home from "../Home";
import Signin from "../Signin";
import Signup from "../Signup";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/signin",
    component: Signin
  },
  {
    path: "/signup",
    component: Signup
  }
];

export default routes;
