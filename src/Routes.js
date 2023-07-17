import { Route, Routes } from "react-router-dom";
import BuyCars from "./components/buyCards/BuyCards";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import MoreInfo from "./components/moreInfo/MoreInfo";
import Using from "./components/using/Using";
import WhyUs from "./components/whyus/WhyUs";
import Header from './components/header/Header'
import About from './components/aboutProduct/About'


export default function Rout() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/more/:id" element={<MoreInfo />} />
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

