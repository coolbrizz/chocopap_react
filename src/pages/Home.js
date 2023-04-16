import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Carrousel from '../components/Carrousel';




const Home = () => {
   
    return (
        <div>
            <Navigation />  
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