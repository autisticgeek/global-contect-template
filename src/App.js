//react-router-dom V6
import { BrowserRouter, Routes, Route } from "react-router-dom";

//static components
import Header from "./components/Header";
import Footer from "./components/Footer";

//dynamic components
import Input from "./routes/Input";
import View from "./routes/View";

//context provider
import { GlobalContextProvider } from "./context/globalContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Input />} />
          <Route path="/view" element={<View />} />
        </Routes>
        <Footer />
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;
