import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from './reducers/index'
import { ConfigProvider } from "antd";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import { routes } from "./router/router";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ConfigProvider>
    <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {routes.map((item) => {
          return (
            <Route
              component={item.component}
              key={item.key}
              exact={item.exact}
              path={item.path}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
    </Provider>
  </ConfigProvider>,
  rootElement
);
