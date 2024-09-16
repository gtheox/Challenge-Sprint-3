import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #ffffff;
  color: #0088CC;
  padding: 20px;
  position: relative;
  margin-top: 8%;
  max-width: 100%;
`;

export const Navigation = styled.nav`
  margin-right: 20px;

  ul {
    list-style-type: none;
    padding: 10px;
    margin: 0;
    align-items: center;

    li {
      margin-top: 10px;

      a {
        display: inline-block;
        padding: 10px 20px;
        border-radius: 20px;
        background-color: #00A1FC;
        color: #fff;
        text-decoration: none;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #0088CC;
        }

        img {
          width: 15px;
        }
      }
    }
  }
`;

export const LogoInferior = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: auto;
  height: 80px;
  border-radius: 0;
`;

export const RedesSociais = styled.nav`
  position: relative;
  margin-top: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  h5 {
    position: absolute;
    margin-top: 50px;
    font-family: "Aleo";
    font-size: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;

    li {
      margin-right: 20px;

      a {
        display: inline-block;
        padding: 8px 16px;
        border-radius: 20px;
        background-color: #00A1FC;
        color: #fff;
        text-decoration: none;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #0088CC;
        }

        img {
          width: 15px;
        }
      }
    }
  }
`;

export const Copyright = styled.div`
  text-align: center;
  clear: both;
  margin-top: 20px;
`;
