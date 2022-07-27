import React from 'react';
import Banner from './banner';
import Blog from './blog';
import Contact from './contact';
import Feachers from './feachers';
import Footer from './footer';
import Products from './products';


const Home = ()=>{
    return (
        <div>
           <Banner/>
           <Feachers/>
           <Products/>
           <Blog/>
           <Contact/>
           <Footer/>
        </div>
    ) 
}
export default Home;