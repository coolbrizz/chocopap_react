import React, { useEffect, useState } from 'react';


const Products = ({article}) => {

    const [star , setStar] =useState('');
    const chocolateId = window.localStorage.chocolate  ?  true : false;
    let notation = `${article.note}`;

useEffect(()=>{
    if (notation === "1"){
        setStar("⭐");
    }else if(notation === "2"){
        setStar("⭐⭐");}
    else if(notation === "3"){
            setStar("⭐⭐⭐");}
    else if(notation === "4"){
            setStar("⭐⭐⭐⭐");}
     else if(notation === "5"){
            setStar("⭐⭐⭐⭐⭐");}
},[])

    const addPanier = () => {
        let storeData = window.localStorage.chocolate ? window.localStorage.chocolate.split(",") : [];
        if(!storeData.includes(article.id.toString())){
            storeData.push(article.id)
            window.localStorage.chocolate = storeData;
        }
    }
    
    return (
        <div className='card'>
            <img src={article.image} alt={article.image}/>
            <h2> {article.title}</h2>
            <p>{article.price} €</p>
            <p>{star}</p>
            <button onClick={() => addPanier()}>Ajouter aux favoris</button> 
        </div>
    );
};

export default Products;