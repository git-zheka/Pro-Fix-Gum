import FooterCSS from './footer.module.scss'
import Title from '../title/Title'

import Robot from '../../media/Robot.svg'

export default function Footer() {

    function sender(event) {
        event.preventDefault();

        var form = event.target;
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var question = document.getElementById("question").value;

        var message = "%0AІм'я: " + name + "%0AНомер телефону: " + phone + "%0AПитання: " + question;

        fetch('https://api.telegram.org/bot6125593105:AAHVGdFE3ZAxganRkh4h_iMitU3fdp9XENg/sendMessage?chat_id=-811741911&text=' + message)
            .then(response => response.json())
            .then(data => {
            console.log(data);
            alert('Wiadomość została wysłana!');
            })
            .catch(error => {
            console.error(error);
            alert('Wysłanie wiadomości nie powiodło się!');
            });
        }

  return (
    <>
        <footer id="form">
            <Title title="Zostaw swoje dane tutaj, oddzwonimy!" />
            <div className={FooterCSS.form_and_robot}>
                <form className={FooterCSS.footerForm} onSubmit={sender}>
                    <label className={FooterCSS.labels} for="name">Imię:</label>
                    <input className={FooterCSS.inputs} type="text" id="name" name="name" placeholder="Wprowadź swoje imię" required />
                
                    <label className={FooterCSS.labels} for="phone">Numer telefonu:</label>
                    <input className={FooterCSS.inputs} type="text" id="phone" name="phone" placeholder="Wprowadź numer telefonu" pattern="[4][8][0-9]{8}" required />
                
                    <label className={FooterCSS.labels} for="question">Pytanie:</label>
                    <textarea id="question" name="question" placeholder="Zadaj swoje pytanie"></textarea>
                
                    <input type="submit" value="Wyślij" />
                </form>

                <div className={FooterCSS.robot}>
                    <img src={Robot} alt="Robot" />
                </div>
            </div>
            
            <div className={FooterCSS.contacts}>
               <div className={FooterCSS.contacts_left}>
                    <p>Nasze kontakty:</p>
               </div>
               <div className={FooterCSS.contacts_right}>
                      <ul>
                        <li className={FooterCSS.nav_item}><a href="tel:+48730291889">+48 730 291 889</a></li>
                        <li className={FooterCSS.nav_item}><a href="mailto:profixgum@gmail.com">profixgum@gmail.com</a></li>
                    </ul>
               </div>
            </div>
        </footer>
    </>
  );
}

