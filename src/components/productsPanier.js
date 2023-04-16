import React, { useEffect, useState } from 'react';


const productsPanier = ({article}) => {

function handleClick(){
    var rightBasket = document.querySelector('.cardbasket');
    rightBasket.style.setProperty('transform' , 'translateX(500px)')
}
    const deletePanier =() => {
        let storedData = window.localStorage.chocolate.split(",");
        // eslint-disable-next-line
        let newData = storedData.filter((id) => id !=article.id);
        window.localStorage.chocolate = newData;
    }

    return ( 
        <div className='cardbasket'>
            <div className="entetePanier">
            <span className='closePanier' onClick={() =>handleClick()} >❌</span>            
            <h1>Votre panier</h1>
            </div>
            <div className="articles">
                <span onClick={() => deletePanier() }>⤬</span>
                <img src={article.image} alt={article.image}/>
                <div className="prix">
            <h2> {article.title}</h2>
            <p>{article.price} €</p>      
            </div>     
            <input type='number' id='number' defaultValue="1" min='1' max='100' autoComplete='off'></input>
            </div>
        </div>
    );
};

export default productsPanier;