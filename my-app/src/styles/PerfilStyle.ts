import styled from 'styled-components';

export const ListaDupla = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem; /* Espaço entre os formulários */
  padding: 2rem;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 300px;
  width: 100%;

  h1 {
    text-align: center;
    color: #0088CC;
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #0088CC;
    font-family: "Aleo", sans-serif;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  button[type="submit"] {
    padding: 0.5rem 2rem;
    background-color: #00A1FC;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;
    display: block;
    width: 100%;
  }

  button[type="submit"]:hover {
    background-color: #0088CC;
  }
`;