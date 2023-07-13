import { Link } from 'react-router-dom';
import Title from '../title/Title';
import BuyCards from './buyCards.module.scss'

import Treeangle from '../../media/TreangleSlider.svg'
import Long from '../../media/LongbordSlider.svg'
import Card from './components/Card';
import Arrow from '../../media/Arrow.svg'

export default function BuyCars() {
  return (
    <>
       <Title title='Asortyment' />
       <section className={BuyCards.BuyCards}>
            <div className={BuyCards.ChooseCards}>
                <h1>Dostępny:</h1>
                <div className={BuyCards.Choose}>1. Niestandardowy projekt</div>
                <div className={BuyCards.Choose}>2. Dowolny kolor</div>
            </div>

            <div className={BuyCards.CardsConteiner}>
              <Link to='/'>
                <Card h2='Трикутник з круглими кутами' img={Treeangle} price='0.75' />
              </Link>

              <Link to='/'>
                <Card h2='Трикутник з круглими кутами' img={Long} price='0.75' />
              </Link>

              <Link to='/'>
                <Card h2='Трикутник з круглими кутами' img={Treeangle} price='0.75' />
              </Link>

              <Link to='/'>
                <Card h2='Трикутник ' img={Long} price='0.75' />
              </Link>
            </div>

            <div className={BuyCards.More}>
              <div className={BuyCards.btnMore}>
                <div className={BuyCards.moretext}>Більше</div>
                <div className={BuyCards.arrow}><img src={Arrow}/></div>
              </div>
            </div>
            
       </section>
    </>
  );
}