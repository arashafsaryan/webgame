import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>
    </Layout>
  );
}

export default App;
