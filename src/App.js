//react-router-dom V6
import { BrowserRouter, Routes, Route } from "react-router-dom";

//static components
import Header from "./components/Header";
import Footer from "./components/Footer";

//dynamic components
import Input from "./routes/Input";
import View from "./routes/View";
import Cart from "./routes/Cart";

//context provider
import { GlobalContextProvider } from "./context/globalContext";
import { CartContextProvider } from "./context/Cart";

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <CartContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Input />} />
            <Route path="/view" element={<View />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;
