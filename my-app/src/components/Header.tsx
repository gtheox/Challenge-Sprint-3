import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper, Logo, Title, Navigation, PerfilIcon } from '../styles/HeaderStyle';
import logoporto from '../assets/img/porto-logo.png'; 
import perfil from '../assets/img/user.png';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <a href="https://www.portoseguro.com.br/">
        <Logo src={logoporto} alt="logo" />
      </a>
      <Title>AutoCare</Title>
      <Navigation>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/diagnostico">Auto Diagnóstico</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
        </ul>
      </Navigation>
      <Link to="/perfil">
        <PerfilIcon src={perfil} alt="ícone perfil" />
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
