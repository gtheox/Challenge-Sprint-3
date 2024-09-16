import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackgroundDiv } from '../styles/MainContentStyle';
import { Formulario } from '../styles/AutoDiagnosticoStyle';

const AutoDiagnostico: React.FC = () => {
  const navigate = useNavigate();

  
  useEffect(() => {
    const email = window.localStorage.getItem('email');
    
    if (!email) {
      
      navigate('/perfil');
    }
  }, [navigate]);

  return (
    <BackgroundDiv>
      <Formulario>
        <div className="conteudo">
          <h1>Auto Diagnóstico</h1>
          <form>
            <label htmlFor="marca">Marca:</label>
            <input type="text" id="marca" name="marca" />

            <label htmlFor="modelo">Modelo:</label>
            <input type="text" id="modelo" name="modelo" />

            <label htmlFor="problema">Identifique seu problema:</label>
            <input type="text" id="problema" name="problema" />

            <button type="submit">ENVIAR</button>
          </form>
        </div>
      </Formulario>
    </BackgroundDiv>
  );
};

export default AutoDiagnostico;
