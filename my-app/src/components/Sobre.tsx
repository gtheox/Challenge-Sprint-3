import React from 'react';
import { BackgroundDiv } from '../styles/MainContentStyle';
import { Container, Fotos, RepoLink } from '../styles/SobreStyle';
import du from '../assets/img/edu.jpg';
import gabriel from '../assets/img/gabriel.jpg';
import luka from '../assets/img/luka.jpg';

const About: React.FC = () => {
  return (
    <BackgroundDiv>
    <Container>
      <h2>Sobre</h2>
      <p>
        O projeto identifica problemas e também fornece soluções e sugestões de manutenção, tudo em um formato fácil de entender para o usuário final.
        Conheça os criadores:
      </p>
      <Fotos>
        <ul>
          <li className="group">
            <img src={du} alt="Eduardo" />
            <p>Eduardo Ribeiro Giovannini</p>
            <p>555030</p>
            <p>1TDSPF</p>
            <a href="https://github.com/DuGiovannini" target="_blank" rel="noopener noreferrer">Github</a>
          </li>
          <li className="group">
            <img src={gabriel} alt="Gabriel" />
            <p>Gabriel Teodoro Golçalves Rosa</p>
            <p>555962</p>
            <p>1TDSPF</p>
            <a href="https://github.com/gtheox" target="_blank" rel="noopener noreferrer">Github</a>
          </li>
          <li className="group">
            <img src={luka} alt="Luka" />
            <p>Luka Ura Shibuya</p>
            <p>558123</p>
            <p>1TDSPF</p>
            <a href="https://github.com/lukashibuya" target="_blank" rel="noopener noreferrer">Github</a>
          </li>
        </ul>
      </Fotos>
      <RepoLink>
        <a href="https://github.com/gtheox/challenge-sprint-1.git" target="_blank" rel="noopener noreferrer">Visite o repositório do site</a>
      </RepoLink>
    </Container>
    </BackgroundDiv>
  );
};

export default About;