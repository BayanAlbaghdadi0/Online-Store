import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProductsPage from "./pages/ProductsPage";
import { Landing } from "./pages/Landing"
import ProductDetails from './pages/ProductDetails'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}


export default App;
