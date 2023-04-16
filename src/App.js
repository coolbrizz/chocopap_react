import React from 'react';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import Boutique from "./pages/Boutique";
import Panier from "./pages/Panier";

const App = () => {
  return (
<BrowserRouter>
<Routes>
  <Route path ="/Home" element={<Home />}/>
  <Route path ="/Boutique" element={<Boutique />}/>
  <Route path='/Panier' element={<Panier />}/>
  <Route path ="*" element={<Home />}/>
</Routes>
</BrowserRouter>
  );
};

export default App;
