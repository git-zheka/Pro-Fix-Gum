import Title from "../title/Title";
import Box from './components/Box/Box'

import WhyCSS from './whyus.module.scss'

export default function WhyUs() {
  return (
    <>
    <Title title="Co czyni nas lepszymi od konkurencji!"/>
    <section className={WhyCSS.section4} id="konkurencji">
        <Box number="1" h4="Niezawodność" des="Zamawiając partię 1000 sztuk - otrzymujesz 1000 funkcjonalnych i gotowych do użycia łączników. W tym czasie zamawiając podobną ilość plastikowych otrzymasz do 10% uszkodzonych, rozebranych, niesprawnych do pełnienia swoich funkcji"/>
        <Box number="2" h4="Elastyczność i efektywność użytkowania" des="Nasze zapięcia są najlepsze, ponieważ mogą mieć dowolny kształt i urzeczywistniać najśmielsze pomysły lub fantazje, ponieważ nie zawierają dodatkowych mechanizmów i detali, które temu zapobiegają"/>
        <Box number="3" h4="Materiał produktu" des="Dowolny kolor i rodzaj powierzchni materiału (błyszczący, matowy)"/>
    </section>
    </>
  );
}

