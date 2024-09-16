import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  text-align: center;

  h2 {
    color: #fff;
    font-family: "Aleo", sans-serif;
    margin-bottom: 1rem;
  }

  p {
    color: #fff;
    font-family: "Aleo", sans-serif;
    font-size: 20px;
  }
`;

export const Fotos = styled.nav`
  display: flex;
  justify-content: center;
  padding: 2rem;
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .group {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px; 
    text-align: center;
  }

  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }

  p {
    margin: 0;
    margin-bottom: 10px; 
    color: #fff;
  }

  a {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    font-size: 25px;
    font-family: "Aleo", sans-serif;
  }
`;

export const RepoLink = styled.h2`
  text-align: center;
  color: #fff;
  
  a {
    text-decoration: none;
    color: #fff;
  }
`;
