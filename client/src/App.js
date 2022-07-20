import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetails from "./Pages/ProductDetails";
import RequestForm from "./components/RequestForm";
import LoginPage from "./Pages/LoginPage";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import Footer from "./components/Footer";
import NoMatch from "./components/NoMatch";
import ProductsProvider from "./services/products.context";
import ForgottenNameOrPassword from "./components/ForgottenNameOrPassword";
import SignUp from "./Pages/SignUpPage";
import Dashboard from "./Pages/Dashboard";
import "./styles/global.scss";

function App() {
  return (
    <>
      <Navbar />
      <div className="content-wrap">
        <ProductsProvider>
          <Routes>
            <Route path="/" exact element={<Homepage />}></Route>
            <Route path="/products" element={<ProductsPage />}></Route>
            <Route
              path="/product-details/:id"
              element={<ProductDetails />}
            ></Route>
            <Route path="login" element={<LoginPage />} />
            <Route
              path="forgotten-name-or-password"
              element={<ForgottenNameOrPassword />}
            ></Route>
            <Route path="register" element={<SignUp />}></Route>
            <Route></Route>
            <Route path="request-form" element={<RequestForm />}></Route>
            <Route path="order-summary" element={<OrderSummary />}></Route>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="*" element={<NoMatch />}></Route>
          </Routes>
        </ProductsProvider>
      </div>
      <Footer />
    </>
  );
}

export default App;
