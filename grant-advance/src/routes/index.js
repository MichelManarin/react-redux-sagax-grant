import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/Authentication";
import NotFound from "../pages/NotFound";
import ProductsPage from "../pages/Products";

export default function RoutesApp() {
  return (
    <>
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
