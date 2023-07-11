import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import About from './components/aboutProduct/About'
import Using from './components/using/Using'

import StyleCSS from './style.module.scss'
import WhyUs from "./components/whyus/WhyUs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className={StyleCSS.App}>
        <Menu />
        <Header />
        <About />
        <WhyUs />
        <Using />
        <Footer />
    </div>
  );
}

export default App;
