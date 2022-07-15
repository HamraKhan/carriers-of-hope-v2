import "./App.css";
import { Container } from "./components/styles/Container.styled";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/auth";
import Homepage from "./components/Homepage";
import AllProducts from "./components/AllProducts";
import ProductDetails from "./components/ProductDetails";
import RequestForm from "./components/RequestForm";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import Footer from "./components/Footer";
import NoMatch from "./components/NoMatch";
import FilteredProducts from "./components/FilteredProducts";
import UserLogin from "./components/UserLogin";
import ForgottenNameOrPassword from "./components/ForgottenNameOrPassword";
import SignUp from "./components/SignUp";
import ConfirmUserAccountCreated from "./components/ConfirmUserAccountCreated";
import ConfirmForgottenNameOrPassword from "./components/ConfirmForgottenNameOrPassword";
import GuestLogin from "./components/GuestLogin";
import Profile from "./components/Profile";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <Container>
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="all-products" element={<AllProducts />}></Route>
            <Route
              path="all-products/:productId"
              element={<ProductDetails />}
            ></Route>
            <Route path="filtered-products" element={<FilteredProducts />} />
            <Route path="user-login" element={<UserLogin />}></Route>
            <Route
              path="profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            ></Route>
            <Route
              path="forgotten-name-or-password"
              element={<ForgottenNameOrPassword />}
            ></Route>
            <Route path="sign-up" element={<SignUp />}></Route>
            <Route path="guest-login" element={<GuestLogin />}></Route>
            <Route
              path="confirm-user-account-created"
              element={<ConfirmUserAccountCreated />}
            ></Route>
            <Route
              path="confirm-forgotten-username-or-password"
              element={<ConfirmForgottenNameOrPassword />}
            ></Route>
            <Route path="request-form" element={<RequestForm />}></Route>
            <Route path="order-summary" element={<OrderSummary />}></Route>
            <Route path="*" element={<NoMatch />}></Route>
          </Routes>
        </div>

        <Footer />
      </Container>
    </AuthProvider>
  );
}

export default App;
