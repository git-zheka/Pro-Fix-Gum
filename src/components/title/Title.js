import TitleCSS from './title.module.scss'


function Title(props) {
  return (
      <h1 className={TitleCSS.h1}>{props.title}</h1>
  );
}

export default Title;