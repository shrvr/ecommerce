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

const App = () => {
  const isLogin = false;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/login"
          element={isLogin ? <Navigate replace to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={isLogin ? <Navigate replace to="/" /> : <Register />}
        />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
};
export default App;
