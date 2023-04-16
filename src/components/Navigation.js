import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    function handleClick(){
        var rightBasket = document.querySelector('.cardbasket');
        rightBasket.style.setProperty('transform' , 'translateX(-0px)')
    }
    return (
        <div>
            <div className="navigation">
                <nav>
                <img src='./logo.png' alt='logo du site' id="logo"></img>
                    <ul>
                        <NavLink to="/Home">
                            <li>Accueil</li>
                        </NavLink>
                        <NavLink to="/Boutique">
                            <li>Boutique</li>
                        </NavLink>
                            <div className="panier">
                            <li><span className='articlePanier'>3 </span>
                             <i onClick={handleClick}className="fa-solid fa-cart-shopping"></i></li>
                            </div>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;