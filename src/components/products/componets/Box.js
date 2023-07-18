  
  
import styleCSS from '../style.module.scss'

export default function Products(props) {

  return (
    <>
        <div className={styleCSS.Card}>
            <div className={styleCSS.CardImg}><img src={props.img} /></div>
                <div className={styleCSS.CardText}>
                    <h2>{props.h2}</h2>
                    <div className={styleCSS.Price}> 
                        <div><p1>{props.price}</p1><p2>грн</p2></div>
                        <button className={styleCSS.btnBuy}>Купити</button>
                    </div>
                    <p3>Є у наявності</p3>
                </div>
        </div>
    </>
  );

  
  
}
