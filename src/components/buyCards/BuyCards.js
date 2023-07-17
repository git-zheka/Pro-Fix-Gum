import { Link } from 'react-router-dom';
import Title from '../title/Title';
import BuyCards from './buyCards.module.scss'

import Treeangle from '../../media/TreangleSlider.svg'
import Long from '../../media/LongbordSlider.svg'
import Card from './components/Card';
import Arrow from '../../media/Arrow.svg'

import { apiURL } from '../../api';
import { useEffect, useState } from 'react';

export default function BuyCars() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(apiURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Помилка при завантажені.');
        }
      })
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


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
            {products.slice(-4).map((product) => (
                <Link to={`/more/${product.id}`} key={product.id}>
                  <Card h2={product.name} img={product.image} price={product.price} />
                </Link>
              ))}
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