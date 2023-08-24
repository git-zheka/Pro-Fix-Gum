import styleCSS from './style.module.scss'
import { useState, useEffect } from 'react';

import Title from '../title/Title'
import {Link} from 'react-router-dom'

import { apiURL } from '../../api';

export default function Admin() {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch(apiURL, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error('Помилка при завантаженні.');
  //       }
  //     })
  //     .then(data => {
  //       setProducts(data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <>
       <Title title='Aдмін панель'/>
       <section className={styleCSS.AddProducts}>
          <div className={styleCSS.RenderProducts}>
              {products.map((product) => (
              <Link to={`/more/${product.id}`} key={product.id}>
                <Admin h2={product.name} img={product.image} price={product.price} />
              </Link>
              ))}
          </div>
       </section> 
    </>
  );
}