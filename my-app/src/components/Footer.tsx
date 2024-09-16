import React from 'react';
import { FooterWrapper, Navigation, LogoInferior, RedesSociais, Copyright } from '../styles/FooterStyle';
import whatsapp from '../assets/img/whatsapp.png';
import telefone from '../assets/img/telefone.png';
import chat from '../assets/img/chat.png';
import instagram from '../assets/img/instagram.png';
import linkedin from '../assets/img/linkedin.png';
import tiktok from '../assets/img/tiktok.png';
import logoporto from '../assets/img/porto-logo.png'; 

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Navigation>
        <ul>
          <li>
            <a
              href="https://api.whatsapp.com/send?1=pt_BR&phone=551130039303&text=Oi,%20Porto%20Seguro%20!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" /> Whatsapp
            </a>
          </li>
          <li>
            <a
              href="https://www.portoseguro.com.br/fale-conosco/contatos/telefones-e-sac?_gl=1*nqdabo*_ga*OTA0MzkwNDUwLjE3MTMzNTg4MDQ.*_ga_S9FTJ8D526*MTcxMzU0MTA0My43LjEuMTcxMzU0MjgzOC4xMy4wLjA."
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={telefone} alt="Telefone" /> Telefone
            </a>
          </li>
          <li>
            <a
              href="https://www.t.me/AutoCareChallenge_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={chat} alt="Chat" /> Chat
            </a>
          </li>
        </ul>
      </Navigation>

      <a href="https://www.portoseguro.com.br/">
        <LogoInferior src={logoporto} alt="logo" />
      </a>

      <RedesSociais>
        <h5>Siga a porto nas redes sociais!</h5>
        <ul>
          <li>
            <a href="https://www.instagram.com/porto" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/porto/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@portoseguro" target="_blank" rel="noopener noreferrer">
              <img src={tiktok} alt="tiktok" />
            </a>
          </li>
        </ul>
      </RedesSociais>

      <Copyright>&copy; 2024</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
