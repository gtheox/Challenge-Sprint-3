import styled from 'styled-components';
import backgroundImage from '../assets/img/background.jpg';

export const BackgroundDiv = styled.div
    background-image: url(${backgroundImage});
    font-family: "Aleo", sans-serif;
    margin: 0;
    padding: 0;
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: center; 
;

export const MainSection = styled.div
    font-family: "Aleo", sans-serif;
    margin-top: 1;
    padding: 0;
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: center; 

    h2 {
    color: #fff;
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 40px;
    font-family: "Aleo";
}

p {
    color: #fff;
    max-width: 60%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 20%;
    font-size: 25px;   
    font-family: "Aleo";
}
;