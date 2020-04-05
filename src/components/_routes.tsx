import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./home/home-page"));
const Exercise = lazy(() => import("./exercise/exercise-page"));

export default () => (
  <Suspense fallback="Loading page...">
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/exercise" exact>
        <Exercise />
      </Route>
    </Switch>
  </Suspense>
);
