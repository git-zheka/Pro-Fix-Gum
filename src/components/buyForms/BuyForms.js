import StyleCSS from './buyforms.module.scss'
import Close from '../../media/Close.svg'
import { connect } from 'react-redux';

import { useSelector } from 'react-redux';

function BuyForms(props) {

  const isOpenForm = useSelector(state => state.isOpenForm);

  return (
    <>
        <div className={`${StyleCSS.BlockBuy} ${isOpenForm ? StyleCSS.active : StyleCSS.inactive}`}>
            <div className={StyleCSS.Navigation}><h1>Adres</h1> <img src={Close} onClick={props.Close} /></div>
            
            <form className={StyleCSS.BuyForms}>
                <label className={StyleCSS.labels} htmlFor="Przyjazna">Przyjazna:</label>
                <input className={StyleCSS.inputs} type="text" id="Przyjazna"  required/>

                <label className={StyleCSS.labels}  htmlFor="Nazva">Nazva:</label>
                <input className={StyleCSS.inputs} type="text" id="Nazva" required/>

                <label className={StyleCSS.labels}  htmlFor="phone">Phone:</label>
                <input className={StyleCSS.inputs} type="phone" id="phone" required/>

                <label className={StyleCSS.labels}  htmlFor="pindeks">Pindeks pozycji</label>
                <input className={StyleCSS.inputs} type="pindeks" id="pindeks" required/>

                <button className={StyleCSS.btnOrder}>Zamówienie</button>
            </form>
        </div>
    </>
  );
}

const mapStateToProps = state => ({
  isOpen: state.isOpen
});

const mapDispatchToProps = dispatch => ({
  Close: () => dispatch({ type: 'CLOSE_FORM' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BuyForms);