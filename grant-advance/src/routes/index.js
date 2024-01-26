import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "../pages/Authentication";
import ProductsPage from "../pages/Products";
import NotFound from "../pages/NotFound";

export default function RoutesApp() {
  const PrivateRoute = ({ element }) => {
    const { token, expirationDate } = useSelector((state) => state.auth);
    const currentDate = new Date();
    const isAuthenticated = !!token && new Date(expirationDate) > currentDate;

    return isAuthenticated ? element : <Navigate to="/" />;
  };

  return (
    <>
      <Routes>
        <Route
          path="/products"
          element={<PrivateRoute element={<ProductsPage />} />}
        />
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
