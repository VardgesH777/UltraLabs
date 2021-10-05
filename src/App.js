import React  from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route } from "react-router-dom";
import {Routes} from "./Routes";

import "antd/dist/antd.css";

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    {Routes.map((route, index) => {
                        const { path, isExact, component } = route
                        return <Route path={path}
                                      component={component}
                                      exact={isExact}
                                      key={index}/>
                    })}
                </Switch>
            </Router>
        </>
    );
};

export default App;
