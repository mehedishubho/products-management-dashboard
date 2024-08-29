import { Route, Routes } from "react-router-dom";
import Index from "../../pages/Index";
import Product from "../../pages/Product";

export default function SubRoot() {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}
