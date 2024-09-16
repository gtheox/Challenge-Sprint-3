import React, { useState } from 'react';
import { ListaDupla, FormWrapper } from '../styles/PerfilStyle';
import { BackgroundDiv } from '../styles/MainContentStyle';
import { useNavigate } from 'react-router-dom';

const MainContent: React.FC = () => {
  
  const [emailLogin, setEmailLogin] = useState<string>('');
  const [senhaLogin, setSenhaLogin] = useState<string>('');
  const [mensagemLogin, setMensagemLogin] = useState<string>('');

  
  const [nomeCadastro, setNomeCadastro] = useState<string>('');
  const [emailCadastro, setEmailCadastro] = useState<string>('');
  const [senhaCadastro, setSenhaCadastro] = useState<string>('');
  const [confirmarSenhaCadastro, setConfirmarSenhaCadastro] = useState<string>('');
  const [mensagemCadastro, setMensagemCadastro] = useState<string>('');

  const navigate = useNavigate();

  
  const fazerLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

   
    if (emailLogin.trim() === '' || senhaLogin.trim() === '') {
      setMensagemLogin('Preencha todos os campos!');
      return;
    }

    
    const emailSalvo = window.localStorage.getItem('email');
    const senhaSalva = window.localStorage.getItem('senha');

    if (emailLogin === emailSalvo && senhaLogin === senhaSalva) {
      setMensagemLogin('Login realizado com sucesso! Redirecionando...');
      setTimeout(() => {
        navigate('/diagnostico');
      }, 2000);
    } else {
      setMensagemLogin('Email ou senha incorretos. Tente novamente.');
    }
  };

 
  const criarConta = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    
    if (nomeCadastro.trim() === '' || emailCadastro.trim() === '' || senhaCadastro.trim() === '' || confirmarSenhaCadastro.trim() === '') {
      setMensagemCadastro('Preencha todos os campos!');
      return;
    }

    if (senhaCadastro !== confirmarSenhaCadastro) {
      setMensagemCadastro('As senhas não coincidem! Tente novamente.');
      return;
    }


    window.localStorage.setItem('email', emailCadastro);
    window.localStorage.setItem('senha', senhaCadastro);

    setMensagemCadastro('Conta criada com sucesso! Recarregando a página para fazer o login...');
setTimeout(() => {
  window.location.reload(); 
}, 2000);
};

  return (
    <BackgroundDiv>
      <ListaDupla>
        <FormWrapper>
          <form id="login" onSubmit={fazerLogin}>
            <h1>Já possuo cadastro</h1>
            <label htmlFor="email_login">Email:</label>
            <input
              type="text"
              id="email_login"
              name="email"
              value={emailLogin}
              onChange={(e) => setEmailLogin(e.target.value)}
            />

            <label htmlFor="senha_login">Senha:</label>
            <input
              type="password"
              id="senha_login"
              name="senha"
              value={senhaLogin}
              onChange={(e) => setSenhaLogin(e.target.value)}
            />

            <button type="submit">ENTRAR</button>

            
            {mensagemLogin && <p>{mensagemLogin}</p>}
          </form>
        </FormWrapper>

        <FormWrapper>
          <form id="cadastro" onSubmit={criarConta}>
            <h1>Não possuo cadastro</h1>
            <label htmlFor="nome">Nome Completo:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={nomeCadastro}
              onChange={(e) => setNomeCadastro(e.target.value)}
            />

            <label htmlFor="email_cadastro">Email:</label>
            <input
              type="text"
              id="email_cadastro"
              name="email"
              value={emailCadastro}
              onChange={(e) => setEmailCadastro(e.target.value)}
            />

            <label htmlFor="senha_cadastro">Senha:</label>
            <input
              type="password"
              id="senha_cadastro"
              name="senha"
              value={senhaCadastro}
              onChange={(e) => setSenhaCadastro(e.target.value)}
            />

            <label htmlFor="confirmar_senha">Confirmar Senha:</label>
            <input
              type="password"
              id="confirmar_senha"
              name="confirmar_senha"
              value={confirmarSenhaCadastro}
              onChange={(e) => setConfirmarSenhaCadastro(e.target.value)}
            />

            <button type="submit">REGISTRAR</button>

            
            {mensagemCadastro && <p>{mensagemCadastro}</p>}
          </form>
        </FormWrapper>
      </ListaDupla>
    </BackgroundDiv>
  );
};

export default MainContent;
