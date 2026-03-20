import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./pages/login";
import PrivateHome from "./private/home";
import Service from "./private/service";
import Techonology from "./private/technology";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="private/home/:id" element={<PrivateHome />} />

        <Route path="/private/service" element={<Service />} />

        <Route path="/private/technology" element={<Techonology />} />
        
        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
