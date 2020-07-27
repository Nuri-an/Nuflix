import React from 'react';
import Logo from '../../assets/Logo.png';
import Button from '../Button';

import './styles.css';

function Menu () {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo}  class="Logo" alt="NUFLIX Logo"/>
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;