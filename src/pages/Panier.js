
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsPanier from '../components/productsPanier';


const Panier = ({article}) => {
    const[listData , setListData] = useState([]); 

    const chocolateId = window.localStorage.chocolate  ?  window.localStorage.chocolate.split(",") : [];
    useEffect(() => {
            axios.get(`http://localhost:3005/products`)
            .then((res) => setListData(res.data))
    }, []);

    return (
        <div>
            <div>
                {listData.length > 0 ?
                (listData
                .filter(choco => choco.id.includes("2"))
                .map((article) => 
                <ProductsPanier key={article.id} article={article} />) )
                : (<h2> Votre panier est vide</h2>)}
            </div>
</div>

    );
};

export default Panier;