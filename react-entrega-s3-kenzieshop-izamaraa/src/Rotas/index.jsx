import Cart from "../Pages/Cart";
import Products from "../Pages/Products";
import { Switch, Route } from "react-router-dom";

export default function Rotas() {
  return (
    <Switch>
      <Route exact path="/">
        <Products />
      </Route>
      <Route path="/carrinho">
        <Cart />
      </Route>
    </Switch>
  );
}
