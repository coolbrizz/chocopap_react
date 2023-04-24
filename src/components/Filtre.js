import React, { useState } from 'react';

const Filtre = () => {
  const [checkedState , setcheckedState] = useState('')
  const handleCheckedChange =(e) => {
    if(e.target.checked == true){
        setcheckedState([...checkedState, e.target.value])
    }else{
        setcheckedState(checkedState.filter((checkState) => checkState !== e.target.value))
    }
  }
    return (
      <div className='containerSearch'>
      <div className='searchTitle'>
          <p>Filtrer</p>
      </div>
      <div className='inputSearch'>
        <h3>Catégories :</h3>
          <div>
              <label htmlFor='tous'>
              <input type="checkbox" 
              id="tous" 
              value="tous" 
              onClick={handleCheckedChange}>
              </input>
              <span>Tous</span>
              </label>
          </div>
          <div>
          <label htmlFor='blanc'>
              <input type="checkbox" 
              id="blanc" 
              value="blanc" 
              onChange={handleCheckedChange}></input>
              <span>Chocolat blanc</span>
              </label>
          </div>
          <div>
          <label htmlFor='lait'>
              <input type="checkbox" 
              id="lait" 
              value="lait" 
              onChange={handleCheckedChange}>
              </input>
              <span>Chocolat au lait</span>
              </label>
          </div>
          <div>
          <label htmlFor='noir'>
              <input type="checkbox" 
              id="noir" 
              value="noir" 
              onChange={handleCheckedChange}></input>
          <span>Chocolat noir</span></label>
          </div>
          <div>
          <label htmlFor='noix'>
              <input type="checkbox" 
              id="noix" 
              value="noix" 
              onChange={handleCheckedChange}></input>
              <span> Noix/Noisette</span></label>
          </div>
          <div>
          <label htmlFor='fruit'>
              <input type="checkbox" 
              id="fruit" 
              value="fruit" 
              onChange={handleCheckedChange}></input>
              <span> Fruit</span></label>
          </div>
          <div>
          <label htmlFor='caramel'>
              <input type="checkbox" 
              id="caramel" 
              value="caramel" 
              onChange={handleCheckedChange}></input>
              <span> Caramel</span></label>
          </div>
          <div>
          <label htmlFor='liqueur'>
              <input type="checkbox" 
              id="liqueur" 
              value="liqueur" 
              onChange={handleCheckedChange}></input>
              <span> Liqueur</span></label>
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
    );
};

export default Filtre;