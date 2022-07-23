// import "./App.css";

import './styles/main.scss'

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
import OrderDetails from "./Pages/OrderDetails";
import OrdersContextProvider from "./Contexts/OrdersContext"

function App() {
  return (
    <>
      <Navbar />
      <div className="content-wrap">
        <ProductsProvider>
          <OrdersContextProvider>
            <Routes>
              <Route path="/" exact element={<Homepage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product-details/:id" element={<ProductDetails />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="forgotten-name-or-password" element={<ForgottenNameOrPassword />}/>
              <Route path="register" element={<SignUp />} />
              <Route path="request-form" element={<RequestForm />} />
              <Route path="order-summary" element={<OrderSummary />} />
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/order/:id" element={<OrderDetails />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </OrdersContextProvider>
        </ProductsProvider>
      </div>
      <Footer />
    </>
  );
}

export default App;
