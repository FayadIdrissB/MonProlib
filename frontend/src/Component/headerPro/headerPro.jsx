import './headerPro.css';
import React, { useState, useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import logoP from '../../image/logoP.png';

function HeaderPro() {


    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Fonction pour basculer l'affichage du menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Fermer le menu en cliquant à l'extérieur
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

  return (
    <div>
        <div className="header">
            <div className="header_container">
                <div className='header_container_pro'>
                    <img src={logoP} alt="" onClick={() => navigate('/')} className='logo-pro'/>  
                    <div className='header_container_button_pro' onClick={toggleMenu}>
                        Bonjour, Fayad
                    </div>
                </div>
            </div>
        </div>

        {menuOpen && (
                <div className="dropdown_menu" ref={menuRef}>
                    <div className="dropdown_item">Mon Espace Pro</div>
                    <div className="dropdown_item">Déposer Mon annonce</div>
                    <div className="dropdown_item">Définir Mes Heures</div>
                    <div className="dropdown_item">Mes Rendez-Vous</div>
                    <div className="dropdown_item">Paramètre</div>
                    <div className="dropdown_item">Déconnexion</div>
                </div>
            )}
    </div>
  );
}

export default HeaderPro;