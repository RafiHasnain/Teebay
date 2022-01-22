import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import SignIn from "./pages/auth/SignIn";
// Pages
const SignIn = React.lazy(() => import("./pages/SignIn"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const ProductList = React.lazy(() => import("./pages/ProductList"));
const CreateProduct = React.lazy(() => import("./pages/CreateProduct"));
const AllProductsList = React.lazy(() => import("./pages/AllProductsList"));
const BuyAndRent = React.lazy(() => import("./pages/BuyAndRent"));

const App = () => {
  const loading = () => <div>Loading...</div>;
  return (
    <Router>
      <Switch>
        <Suspense fallback={loading()}>
          <Route exact path='/'>
            <Redirect to='/sign-in' />
          </Route>
          <Route path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/product-list' component={ProductList} />
          <Route path='/create-product' component={CreateProduct} />
          <Route path='/all-product-list' component={AllProductsList} />
          <Route path='/buy-and-rent' component={BuyAndRent} />
        </Suspense>
      </Switch>
    </Router>
    // <SignIn />
  );
};

export default App;
