import BuyCards from '../buyCards.module.scss'


export default function Card(props) {
  return (
    <>

                <div className={BuyCards.Card}>
                  <div className={BuyCards.CardImg}><img src={props.img} /></div>
                    <div className={BuyCards.CardText}>
                      <h2>{props.h2}</h2>
                      <div className={BuyCards.Price}> 
                          <div><p1>{props.price}</p1><p2>грн</p2></div>
                          <button className={BuyCards.btnBuy}>Купити</button>
                      </div>
                      <p3>Є у наявності</p3>
                    </div>
                </div>
    </>
  );
}