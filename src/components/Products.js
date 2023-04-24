import React, { useEffect, useState } from 'react';

const Products = ({article, updateStoreData }) => {
    const [star , setStar] = useState('');
    useEffect(() => {
        let notation = `${article.note}`;
        if (notation === "1") {
            setStar("⭐");
        } else if (notation === "2") {
            setStar("⭐⭐");
        } else if (notation === "3") {
            setStar("⭐⭐⭐");
        } else if (notation === "4") {
            setStar("⭐⭐⭐⭐");
        } else if (notation === "5") {
            setStar("⭐⭐⭐⭐⭐");
        }
    }, []);

    function addPanier() {
        let newStoreData = window.localStorage.chocolate ? window.localStorage.chocolate.split(",") : [];
        if (!newStoreData.includes(article.id.toString())) {
          newStoreData.push(article.id);
          window.localStorage.chocolate = newStoreData;
          updateStoreData(newStoreData);
        }
      }

    return (
        <div className='card'>
            <img src={article.image} alt={article.image}/>
            <h2> {article.title}</h2>
            <p>{article.price} €</p>
            <p>{star}</p>
            <button onClick={() => addPanier()}>Ajouter au panier</button> 
        </div>
    );
};

export default Products;