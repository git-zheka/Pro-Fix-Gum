import { Route, Routes } from "react-router-dom";
import BuyCars from "./components/buyCards/BuyCards";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import MoreInfo from "./components/moreInfo/MoreInfo";
import Using from "./components/using/Using";
import WhyUs from "./components/whyus/WhyUs";
import Header from './components/header/Header'
import About from './components/aboutProduct/About'
import Admin from "./pages/Admin/Admin";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";


export default function Rout() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/more/:id" element={<MoreInfo />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <BuyCars />
      <About />
      <WhyUs />
      <Using />
    </>
  );
}

