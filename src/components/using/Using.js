import UsingCSS from './Using.scss'

import Title from '../title/Title';

import using1 from '../../media/using1.svg'
import using2 from '../../media/using2.svg'
import using3 from '../../media/using3.svg'

export default function Using() {
  return (<>
        <Title title='Symulacja użytkowania' />

        <section className="using">
                <img src={using1} alt="using1" />
                <img src={using2} alt="using2" />
                <img src={using3} alt="using3" />
        </section>
  </>);
}



