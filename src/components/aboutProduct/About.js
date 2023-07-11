import AboutCSS from './About.module.scss'

import More from '../../media/More.svg'
import Longbord from '../../media/Big_longbord.svg'
import Title from '../title/Title';

function App() {
  return (<>

        <Title title='O produkcie' />
        <section id="produkcie" className={AboutCSS.section3}> 

        <div className={AboutCSS.section_left_right}>
            <div className={AboutCSS.advantages}>
                    <div className={AboutCSS.advantagesBox}>
                        <div className={AboutCSS.advantagesText}>
                            <h4>Bezpieczeństwo użytkowania dla odzieży dziecięcej</h4>
                            <img className={AboutCSS.up} src={More} />
                        </div>
                        <div className={AboutCSS.advantagesInfo}>
                            <p>Ponadto ten gumowy element ustalający jest znacznie bezpieczniejszy dla dzieci, ponieważ jest miękki, nie zawiera drobnych części i nie ma ostrych, twardych kształtów</p>
                        </div>
                    </div>
                
                    <div className={AboutCSS.flex}>
                        <div className={AboutCSS.advantagesBox + ' ' + AboutCSS.box2}>
                            
                            <div className={AboutCSS.advantagesText}>
                                <h4>Zasada pracy</h4>
                                <img src={More} />
                            </div>

                            <div className={AboutCSS.advantagesInfo}>
                                <p>Zasada działania stabilizatora polega na działaniu dwóch lub trzech otworów (o średnicy ok 1,5-2 mm.  lub od 0,5 mm do 10 mm), wykonane w gumowej obudowie o pożądanym kształcie ze szczeliną między nimi</p>
                            </div>
                        
                        </div>

                        <div className={AboutCSS.advantagesBox + ' ' + AboutCSS.box3}>
                            <div className={AboutCSS.advantagesText}>
                                <h4>Montaż stopera</h4>
                                <img src={More} />
                            </div>
                            <div className={AboutCSS.advantagesInfo}>
                                <p>Za pomocą haczyka sznurek lub gumka wciągana jest do szczeliny, która jest mocno zamocowana otwory, ze względu na różnicę średnic koronki i otworu (koronka ma średnią grubość 3 mm, otwór ma średnicę 1,5-2 mm), przez co koronka powoduje nacisk na ścianki gumy w dziurkę, ściskając ją, guma zgodnie ze swoimi właściwościami (napięciem wewnętrznym) próbuje powrócić do stanu pierwotnego, napinając wokół niej sznurek, tym samym mocno go mocując.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={AboutCSS.flex}>
                        <div className={AboutCSS.advantagesBox + ' ' + AboutCSS.box4}>
                            
                            <div className={AboutCSS.advantagesText}>
                                <h4>Łatwość użycia</h4>
                                <img src={More} />
                            </div>

                            <div className={AboutCSS.advantagesInfo}>
                                <p>Otwór umożliwia umieszczenie zapięcia dokładnie na tej części koronki lub gumki, gdzie jest to potrzebne, bez potrzeby wolnego końca koronki (gdy jest wszyta w produkt)</p>
                            </div>
                        
                        </div>

                        <div className={AboutCSS.advantagesBox + ' ' + AboutCSS.box5}>
                            <div class={AboutCSS.advantagesText}>
                                <h4>Rodzaje materiałów</h4>
                                <img src={More} />
                            </div>
                            <div className={AboutCSS.advantagesInfo}>
                                <p>Możesz wybrać materiał i kolory okuć</p>
                            </div>
                        </div>
                    </div>

            </div>

            <div className={AboutCSS.Longbord}>
                    <img src={Longbord} />
            </div>
        </div>
        </section> 

  </>);
}

export default App;



