import { CardBody, CardContainer, CardItem } from "./components/ui/3dCard";
import { LampDemo } from "./components/ui/Lamp";
import { TextGenerateEffect } from "./components/ui/TextGenerateEffect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCard from "./components/ProductCard/ProductCard";
import { Toaster } from "react-hot-toast";
import ProductsPage from "./pages/ProductsPage";
import {Landing} from './pages/Landing'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
      </>
  );
}


export default App;
