import React,{us} from 'react';
import Home from './components/Home';
import Do from './components/Do';
import Dont from './components/Dont';
import Updates from './components/Updates';
import Footer from './components/Footer';
import Corona from './components/Corona';
import Navbar from './components/Navebar';
const axios = require('axios');

function App() {
//   async function data(){
//   const data  =  await axios.get('https://api.covid19india.org/data.json') ;
//   let sum = formatNumb(data.data.statewise.confirmed)
// console.log(sum);
//   }
//   data();
  return (
    <div className="wrapper">
        <div className="inner_wrapper">
           <Navbar/>
           <Home />
           <Corona/>
           <Do />
           <Dont />
           <Updates />
           <Footer />
        </div>
    </div>
  );
}

export default App;
