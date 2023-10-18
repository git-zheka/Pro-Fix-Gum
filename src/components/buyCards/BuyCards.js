import { Link } from 'react-router-dom';
import Title from '../title/Title';
import BuyCards from './buyCards.module.scss'

import Card from './components/Card';
import Arrow from '../../media/Arrow.svg'

import { BuyCardsAPI } from '../../api';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function BuyCars(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    BuyCardsAPI()
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

        <div className={BuyCards.More} onClick={props.isProducts}>
          <div className={BuyCards.btnMore}>
            <div className={BuyCards.moretext}>Більше</div>
            <div className={BuyCards.arrow}><img src={Arrow}/></div>
          </div>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = state => ({
  isProducts: state.isProducts
});

const mapDispatchToProps = dispatch => ({
  isProducts: () => dispatch({ type: 'OPEN_PRODUCTS' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BuyCars);