import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import About from './components/aboutProduct/About'
import Using from './components/using/Using'

import StyleCSS from './style.module.scss'
import WhyUs from "./components/whyus/WhyUs";
import Footer from "./components/footer/Footer";
import BuyCards from "./components/buyCards/BuyCards";
import MoreInfo from "./components/moreInfo/MoreInfo";
import Basket from "./components/basket/Basket";

function App() {
  return (
    <div className={StyleCSS.App}>
        {/* <Menu />
        <Header />
        <BuyCards />
        <About />
        <WhyUs />
        <Using />
        <Footer /> */}
        {/* <MoreInfo /> */}

        <Basket />
    </div>
  );
}

export default App;
