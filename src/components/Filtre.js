import React from 'react';

const Filtre = () => {
    return (
        <div>
            <div className='containerSearch'>
                <div className='searchTitle'>
                    <p>Filtrer</p>
                </div>
                <div className='inputSearch'>
                  <h3>Catégories :</h3>
                  <div>
                    <input type="checkbox" id="tous" name="tous"></input>
                    <label>Tous</label>
                  </div>
                  <div>
                    <input type="checkbox" id="blanc" name="blanc"></input>
                    <label>Chocolat Blanc</label>
                  </div>
                  <div>
                    <input type="checkbox" id="lait" name="lait"></input>
                    <label>Chocolat au lait</label>
                  </div>
                  <div>
                    <input type="checkbox" id="noir" name="noir"></input>
                    <label>Chocolat noir</label>
                  </div>
                  <div>
                    <input type="checkbox" id="noix" name="noix"></input>
                    <label>Noix/Noisette</label>
                  </div>
                  <div>
                    <input type="checkbox" id="fruit" name="fruit"></input>
                    <label>Fruit</label>
                  </div>
                  <div>
                    <input type="checkbox" id="caramel" name="caramel"></input>
                    <label>Caramel</label>
                  </div>
                  <div>
                    <input type="checkbox" id="liqueur" name="liqueur"></input>
                    <label>Liqueur</label>
                  </div>

                <div className='inputPrice'>
                  <h3>Prix :</h3>
                <div className='range-container'>
                        <form action="#">
                                <label>Prix mini :</label>
                                <select name="Price" id="price">
                                <option value="mini">Mini</option>
                                <option value="2">2€</option>
                                <option value="3">3€</option>
                                <option value="4">4€</option>
                                <option value="5">5€</option>
                                <option value="6">6€</option>
                                <option value="7">7€</option>
                                <option value="8">8€</option>
                                <option value="9">9€</option>
                                <option value="10">10€</option>
                                </select>
                        </form>
                        <form action="#">
                            <label>Prix maxi :</label>
                            <select name="Price" id="price">
                            <option value="maxi">maxi</option>
                            <option value="11">11€</option>
                            <option value="12">12€</option>
                            <option value="13">13€</option>
                            <option value="14">14€</option>
                            <option value="15">15€</option>
                            <option value="16">16€</option>
                            <option value="17">17€</option>
                            <option value="18">18€</option>
                            <option value="19">19€</option>
                            <option value="20">20€</option>
                            </select>
                        </form>
                        </div>
                    <div className='range'>
                        <h3>Notes :</h3>
                        <form action="#">
                          <label >Note mini :</label>
                          <select name="noteMini" id="noteMini">
                            <option value="noteMini">mini</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
                        </form>
                        <form action="#">
                          <label >Note maxi :</label>
                          <select name="noteMaxi" id="noteMaxi">
                            <option value="Nmaxi">maxi</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </form>
                    </div>
                </div>
                </div>
        </div>
        </div>
    );
};

export default Filtre;