/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import "./App.css";
import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS
import { HashRouter, Route, Routes as Switch } from "react-router-dom";
import routes from "./routes/routes";
import axios from "axios";
// import Login from "./admin/components/login/Login";
// import Home from "./layouts/home/Home.jsx";

if (process.env.REACT_APP_STAGE === "PROD")
  console.log = function no_console() {};
const Login = React.lazy(() => import("./pages/login/index"));
function App() {
  var [loader, setLoader] = useState(true);
  let [auth, setAuth] = useState(false);

  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse" />
    </div>
  );
  function authenticateAdminUsingToken(callback) {
    if (!localStorage.getItem("accessToken")) {
      callback(false);
    }
    let url = `${process.env.REACT_APP_API_URL}/api/auth/authenticate-user`;
    let headers = {
      "x-access-token": `${localStorage.getItem("accessToken")}`
    };
    axios
      .post(url, {}, { headers: headers })
      .then(result => {
        console.log("result", result.status);
        if (result.status === 200) {
          callback(true);
        }
      })
      .catch(error => {
        console.log("error", error);
        callback(false);
      });
  }
  useEffect(() => {
    demoAsyncCall().then(() => setLoader(false));
    authenticateAdminUsingToken(status => {
      console.log("hello", status);
      setAuth(status);
    });
  }, []);
  const isAuthenticated = auth;
  console.log("auth", auth);
  return (
    <HashRouter>
      {loader
        ? null
        : <React.Suspense fallback={loading}>
            <Switch>
              {routes.map(({ path, exact, component: Component }) =>
                <Route
                  key={path}
                  path={path}
                  exact={exact}
                  element={
                    !isAuthenticated &&
                    path === "/dashboard"
                      ? <Login />
                      : <Component />
                  } // sans the angle brackets </>
                />
              )}
            </Switch>
          </React.Suspense>}
    </HashRouter>
  );
}
function demoAsyncCall() {
  return new Promise(resolve => setTimeout(() => resolve(), 2500));
}
export default App;
