import React from 'react';
import Home from './Home/Home';
import {Route,Routes,Router} from 'react-router-dom';
import PageProducts from './pageproducts/pageproducts';
import Gallery from './gallery/gallery';
import ConectToUs from './conectToUs/conectToUs';
import Navbar from './navbar';

const App = ()=>{
    return (<>
        <Navbar/>
        <Routes>
           <Route path="/gallery" element={<Gallery/>} />
           <Route path="/Products" element={<PageProducts/>} />
           <Route path="/ConectToUs" element={<ConectToUs/>} />
           <Route path="/" exact="true" element={<Home/>} />
        </Routes>
        </> ) 
}
export default App;
