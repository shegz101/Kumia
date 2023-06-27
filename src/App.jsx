import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
//Pages
import { Home, Contact } from "./pages";
//Components
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Header and Footer should be outside the Routes since they appear in all pages */}
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
