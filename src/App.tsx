import { Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import Header from "./components/Header";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import Delivery from "./pages/Delivery";
import Payments from "./pages/Payments";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-900">
      <Container>
        <Header/>
        <div className="w-full flex py-1 gap-1 h-full">
          
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/delivery" element={<Delivery/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/payment" element={<Payments/>}/>
          </Routes>
        </div>
      </Container>
    </div>
  );
}

export default App;
