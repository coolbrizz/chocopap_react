import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Carrousel from '../components/Carrousel';
import Panier from './Panier';




const Home = () => {
   
    return (
        <div>
            <Navigation />  
            <Panier />
            <h1 className='titre'>Accueil</h1>
            <div className="carrousel">
            <Carrousel />
            <button className='versBoutique'><a href='/Boutique'>Voir la boutique</a></button>
            </div>
            <Footer />
        </div>
    );
};

export default Home;