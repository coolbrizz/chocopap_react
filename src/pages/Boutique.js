import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Filtre from '../components/Filtre';
import Products from '../components/Products';
import axios from 'axios';
import Panier from './Panier';


const Boutique = () => {
    const [cholcolateData, setChocolateData]= useState([]);
    const getData =()=>{axios.get("http://localhost:3005/products")
    .then((res)=>setChocolateData(res.data))};
    useEffect(()=> getData(),[]);


    return (
        <div>
            <Navigation />
            <Filtre />
            <Panier />
            <h1 className='titre'>Boutique</h1>
            <div className="containerChocolate">

                <div className="displayProduct">
                    <ul id="result">
                        {cholcolateData
                        .map((article)=><Products key={article.id} article={article} /> )}
                    </ul>
                </div>
            </div>

            <Footer/>
        </div>

    );
};

export default Boutique;