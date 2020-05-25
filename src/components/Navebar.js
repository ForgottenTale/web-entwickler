import React,{useState} from 'react';
import './css/navbar.scss';
import Logo from '../assets/logo.png';
import {Link} from 'react-scroll';

function Navbar(){

    const [open,setOpen] = useState({
        open : false
      });
    var togggle = () =>{
        setOpen((prevState)=>{
            return({open : !prevState.open})
          })
          console.log(open.open);
    }
    var style = {
       
    }
    if(open.open === true)
    {
        style = {
            transform:"translateX(0)"
        }   
    }
    return(
        <div className="navbar">
            <img src={Logo} className="navbar__logo" />
            <ul className = "navbar__links" style={style}>
                 <Link to="home" className="navbar__links__a" onClick={togggle}>Home</Link>
                 <Link to = "corona"className="navbar__links__a" onClick={togggle}>Covid-19</Link>
                 <Link to = "do" className="navbar__links__a" onClick={togggle}>Do's</Link>
                 <Link to = "dont" className="navbar__links__a" onClick={togggle}>Dont's</Link>
                 <Link to = "update" className="navbar__links__a" onClick={togggle}>Updates</Link>
            </ul>
           
            <div className="menu" onClick={togggle}>
                <div className="menu__bar"></div>
                <div className="menu__bar"></div>
                <div className="menu__bar"></div>
            </div>
        </div>
    )
}

export default Navbar;