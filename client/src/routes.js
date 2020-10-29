import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Box } from "@material-ui/core";
import Loader from "./components/loader";
import Header from "./app/header";
import Footer from "./app/footer";
import { ProtectedRoute } from "./protected";

const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));
const Home = lazy(() => import("./pages/home"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Header />
        <Box style={{ minHeight: 300, padding: 15 }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <Redirect to="/" />
          </Switch>
        </Box>
        <Footer />
      </Suspense>
    </Router>
  );
};
export default Routes;
