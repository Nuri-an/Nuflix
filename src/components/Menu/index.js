import React from 'react';
import Logo from '../../assets/Logo.png';
import Button from '../Button';
import { Link } from 'react-router-dom';

import './styles.css';

function Menu () {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo}  className="Logo" alt="NUFLIX Logo"/>
            </Link>

            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;