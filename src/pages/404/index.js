import React from 'react';
import Logo from '../../assets/Logo.png';
import styled from 'styled-components';
import './style.css';

const Body = styled.div`
    background-color: #141414;
    text-align: center;
    min-height: calc(100vh - var(--bodyPaddingTop));
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const LogoNuflix = styled.img`
    max-width: 500px;
    @media (max-width: 800px) {
        max-width: 200px;
    }
`;

const Erro = styled.h1`
    color: #C20C71;
    font-size:60px;
    @media (max-width: 800px) {
        font-size: 30px;
    }
`;

function Pagina404 () {
    return (
        <Body>
            <a href="/">
                <LogoNuflix src={Logo} alt="Logo Nuflix" />
            </a>
            <Erro>
                Erro 404
            </Erro>
        </Body>
    )
}

export default Pagina404;