import StyleCSS from './moreinfo.module.scss' 

export default function MoreInfo() {
  return (
    <>
        <div className={StyleCSS.MoreInfo}>
            <div className={StyleCSS.VisualModel}>
                Canva
            </div>

            <div className={StyleCSS.DetailsInfo}>
                <h1>Трикутник з круглими кутами</h1>
                <p1>0.75</p1><p2>грн</p2>
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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and  more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
        </div>
    </>
  );
}