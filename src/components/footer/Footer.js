import './Footer.css'
import {Footer} from "react-materialize"
import github from '../Assests/icons8-github-50.png';
import twitter from '../Assests/icons8-twitter.svg';
import instagram from '../Assests/icons8-instagram-50.png';
import facebook from '../Assests/icons8-facebook-circled-50.png';
import telegram from '../Assests/icons8-telegram-app-50.png'


const FooterSection = () => {
    return (
      <Footer className="main-footer">
        <ul className="icon">
          <li>
            <a
              href="https://github.com/Marinijibia"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github logo" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/@marinijibia"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="github logo" />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/+OPHD-1nisoQwNzRk"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="github logo" />
            </a>
          </li>
          <li>
            <a
              href="https://web.facebook.com/e3stor/?ref=pages_you_manage"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="github logo" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/marinijibia/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="github logo" />
            </a>
          </li>
        </ul>
      </Footer>
    );
}


export default FooterSection;