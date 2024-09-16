import styled from 'styled-components';
import backgroundImage from '../assets/img/background.jpg';

export const BackgroundDiv = styled.div`
    background-image: url(${backgroundImage});
    font-family: "Aleo", sans-serif;
    margin: 0;
    padding: 0;
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: center; 
`;
export const Formulario = styled.form`
display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 2rem;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 5rem auto;
    border: 2px solid black;
    height: 500px;

h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: #0088CC;
}

label {
    display: flex;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #0088CC;
    font-family: "Aleo";
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
    margin-left: 200px;
}

button[type="submit"]:hover {
    background-color: #0088CC;
}

`;