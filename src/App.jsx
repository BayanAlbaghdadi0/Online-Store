import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProductsPage from "./pages/ProductsPage";
import {Landing} from "./pages/Landing"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
      <Toaster />
      </>
  );
}


export default App;
