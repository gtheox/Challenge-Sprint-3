import React from 'react';
import { BackgroundDiv, MainSection} from '../styles/MainContentStyle';

const MainContent: React.FC = () => {
  return (
    <BackgroundDiv>
    <MainSection>
      <h2>Conheça o nosso novo serviço:</h2>
      <p>
        Explore a inovação do Autodiagnóstico Inteligente da Porto Seguro: uma verdadeira transformação na forma como você cuida do seu veículo. Ao conectar o dispositivo ao seu carro, em apenas alguns minutos, você recebe um relatório abrangente sobre o estado atual do seu automóvel. Não apenas isso, mas também obtém recomendações personalizadas, permitindo que você tome medidas proativas para garantir que seu veículo permaneça nas melhores condições possíveis.
      </p>
      <p>
        Este serviço é mais do que apenas uma conveniência; é uma extensão do compromisso da Porto Seguro com seus clientes, integrado perfeitamente ao seu seguro automotivo. Com essa ferramenta, você pode desfrutar de tranquilidade extra enquanto está na estrada, sabendo que seu carro está sendo cuidado de maneira eficaz e eficiente. Não espere mais para experimentar essa solução inovadora.
      </p>
      <p>
        Descubra hoje como o Autodiagnóstico Inteligente da Porto Seguro pode tornar a manutenção do seu veículo mais simples e conveniente do que nunca.
      </p>
    </MainSection>
    </BackgroundDiv>

  );
};

export default MainContent;