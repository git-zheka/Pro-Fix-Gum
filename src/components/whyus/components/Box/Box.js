
import WhyCSS from '../../whyus.module.scss'

export default function WhyUs(props) {
  return (
    <>
        <div className={WhyCSS.betterBox}>
            <div className={WhyCSS.betterNumber}>{props.number}</div>
            <div className={WhyCSS.betterInfo}>
                <h4>{props.h4}</h4>
                <h5>{props.des}</h5>
            </div>
        </div>
    </>
  );
}

