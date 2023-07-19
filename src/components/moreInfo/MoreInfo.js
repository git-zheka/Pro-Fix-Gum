import StyleCSS from './moreinfo.module.scss' 
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { apiURL } from '../../api';

export default function MoreInfo() {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`${apiURL}/${id}`, {
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
            setProduct(data);
            window.scrollTo(0, 0); // Прокрутити сторінку вгору
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

  return (
    <>
        <div className={StyleCSS.MoreInfo}>
            <div className={StyleCSS.VisualModel}>
                Canva
            </div>

            <div className={StyleCSS.DetailsInfo}>
                <h1>{product.name}</h1>
                <p1>{product.price}</p1><p2>грн</p2>
                <h3>Розміри:</h3>
                <h4>Висота: 10см</h4>
                <h4>Ширина: 8см</h4>
                <h4>Діаметир отворів: 0.6см</h4>

                <div className={StyleCSS.AddToBuy}>
                    <div className={StyleCSS.btnBuy}>Купити</div>
                    <p>Є у наявності</p>
                </div>
            </div>

            <div className={StyleCSS.Description}>
                <h2>Загальний опис</h2>
                <p>{product.description}</p>
            </div>
        </div>
    </>
  );
}