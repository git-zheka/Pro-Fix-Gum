import Menu from "./components/menu/Menu"

import StyleCSS from './style.module.scss'
import Footer from "./components/footer/Footer"
import Basket from "./components/basket/Basket"
import BuyForms from './components/buyForms/BuyForms'
import Routes from './Routes'

import { useSelector } from "react-redux"
import Products from "./components/products/Products"

export default function App() {

  const isOpen = useSelector(state => state.isOpen);
  const isOpenForm = useSelector(state => state.isOpenForm);
  const isOpenProducts = useSelector(state => state.isProducts);

  return (
  <>
        {isOpen ? <Basket /> : null}
        {isOpenForm ? <BuyForms /> : null}
        {isOpenProducts ? <Products /> : null }
        <Menu />
        <div className={StyleCSS.App}>
          <Routes />
          <Footer />
        </div>
    </>
  );
  
}

