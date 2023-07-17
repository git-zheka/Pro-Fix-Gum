import Header from "./components/header/Header"
import Menu from "./components/menu/Menu"
import About from './components/aboutProduct/About'
import Using from './components/using/Using'

import StyleCSS from './style.module.scss'
import WhyUs from "./components/whyus/WhyUs"
import Footer from "./components/footer/Footer"
import BuyCards from "./components/buyCards/BuyCards"
import MoreInfo from "./components/moreInfo/MoreInfo"
import Basket from "./components/basket/Basket"
import BuyForms from './components/buyForms/BuyForms'
import Routes from './Routes'
import { Provider } from 'react-redux';

import { useSelector } from "react-redux"
import store from "./store"

export default function App() {

  const isOpen = useSelector(state => state.isOpen);
  const isOpenForm = useSelector(state => state.isOpenForm);

  return (
  <>
        {isOpen ? <Basket /> : null}
        {isOpenForm ? <BuyForms /> : null}
        <Menu />
        <div className={StyleCSS.App}>
          <Routes />
          <Footer />
        </div>
    </>
  );
  
}

