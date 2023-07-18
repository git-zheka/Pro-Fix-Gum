import styleCSS from './style.module.scss'
import Box from './componets/Box'
import { Link } from 'react-router-dom';
import { apiURL } from '../../api'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Close from '../../media/Close.svg'

function Products(props) {
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
          throw new Error('Помилка при завантаженні.');
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
      <div className={styleCSS.Products}>
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