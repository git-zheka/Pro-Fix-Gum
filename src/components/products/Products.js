import styleCSS from './style.module.scss'
import Box from './componets/Box'
import { Link } from 'react-router-dom';
import {  ProductsAPI } from '../../api'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Close from '../../media/Close.svg'


import { useSelector } from 'react-redux';

function Products(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      ProductsAPI()        
      .then(data => {
        setProducts(data);
      })
  }, []);

  
  const isOpenProducts = useSelector(state => state.isProducts); 
  console.log(isOpenProducts)

  return (
    <>
      <div className={`${styleCSS.Products} ${isOpenProducts ? styleCSS.active : styleCSS.inactive}`}>
        <div className={styleCSS.head}>
          <div><h1>Asortyment</h1></div>
          <div className={styleCSS.Close}><img src={Close} onClick={props.closeProducts} /></div>
        </div>
        {products.map((product) => (
          <Link to={`/more/${product.id}`} key={product.id} onClick={props.closeProducts}>
            <Box h2={product.name} img={product.image} price={product.price} />
          </Link>
        ))}
      </div>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  closeProducts: () => dispatch({ type: 'CLOSE_PRODUCTS' }), 
});

export default connect(null, mapDispatchToProps)(Products);