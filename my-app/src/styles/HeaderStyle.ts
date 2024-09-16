import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px;
  background-color: #ffffff;
  margin: 0;
  color: #00a1fc;
`;

export const Logo = styled.img`
  display: inline-block;
  width: auto;
  height: 80px;
  margin-top: -20px;
  margin-left: 40px;
  border-radius: 0;
`;

export const Title = styled.h1`
  margin-right: auto;
  font-family: 'Aleo', serif;
  font-size: 30px;
`;

export const Navigation = styled.nav`
  margin-right: 20px;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;

    li {
      margin-right: 20px;
    }

    a {
      display: inline-block;
      padding: 8px 16px;
      border-radius: 20px;
      background-color: #00a1fc;
      color: #fff;
      text-decoration: none;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #0088cc;
      }
    }
  }
`;

export const PerfilIcon = styled.img`
  display: inline-block;
  width: auto;
  height: 60px;
  margin-top: -20px;
  margin-left: 40px;
  border-radius: 0;
`;
