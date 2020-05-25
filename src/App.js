import React,{ useEffect} from 'react';
import Home from './components/Home';
import Do from './components/Do';
import Updates from './components/Updates';
import Footer from './components/Footer';
import Corona from './components/Corona';
import Navbar from './components/Navebar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const axios = require('axios');

function App() {
  async function data(){
  await  fetch('https://www.mohfw.gov.in/') 
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
      console.log(data);
      })
    .catch(function(err) {
       console.log(err);
    });
  }
  data();

useEffect(()=>{
  AOS.init({duration:1500});
},[]);
  return (
    <div className="wrapper">
        
          <div className="helpline_number">
          Helpline Number :
                +91-11-23978046
          </div>
           <Navbar />
           <Home />
           <Corona/>
           <Do />
       
           
           <Updates />
           <Footer />
        </div>
  
  );
}

export default App;
