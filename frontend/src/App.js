import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/HomePage";
import Laptoppage from "./pages/LaptopPage";
import Cart from "./pages/CartPage";
import Laptop from "./components/main/laptop";
import Footer from "./components/footer/footer";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* remove this route when editing is over */}
        {/* <Route exact path="/" element={<Footer />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/laptops/" element={<Laptoppage />} />
        <Route exact path="/laptops/:id" element={<Laptoppage />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
