import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate replace to="/login" />}
          />
          <Route
            path="/products/:category"
            element={user ? <ProductList /> : <Navigate replace to="/login" />}
          />
          <Route
            path="/products/"
            element={user ? <ProductList /> : <Navigate replace to="/login" />}
          />
          <Route
            path="/product/:id"
            element={user ? <ProductPage /> : <Navigate replace to="/login" />}
          />
          <Route
            path="/cart"
            element={user ? <Cart /> : <Navigate replace to="/login" />}
          />
          <Route
            path="/login"
            element={user ? <Navigate replace to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate replace to="/" /> : <Register />}
          />
          <Route path="/success" element={<Success />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};
export default App;
