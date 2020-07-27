import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={Logo} alt="Logo Nuflix" style={{height: 90}} />
      </a>
      <p>
        Orgulhosamente criado por 
        {' '}
        <a href="https://www.github.com/Nuri-an">
          Nurian
        </a>
        {' '}
        durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
