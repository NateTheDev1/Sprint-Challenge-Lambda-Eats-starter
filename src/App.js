import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import Header from "./components/Header";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import OrderComplete from "./components/OrderComplete";

const App = () => {
  const [order, setOrder] = useState();

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/pizza">
          <PizzaForm setOrder={setOrder} />
        </Route>
        <Route exact path="/completed">
          <OrderComplete order={order} />
        </Route>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};
export default App;
