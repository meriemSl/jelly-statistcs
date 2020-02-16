import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./homePage/HomePage.react";
import LiquidityProviders from "./liquidityProvider/liquidityProviders.react";

import Liquidity from "./liquidity/liquidity.react";
import "tabler-react/dist/Tabler.css";

type Props = {||};

function App(props: Props): React.Node {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/liquidityProviders" component={LiquidityProviders} /> 
          <Route exact path="/liquidity" component={Liquidity} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
