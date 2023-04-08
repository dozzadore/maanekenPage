import React, { Component } from 'react';
import './header.css';
import img from '../images/headerText.png';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div className='headerMain'>
                <Link to='/'><div className='mainLogo'>Maneken</div></Link>
                <div className='headerText'>
                    <img src={img} alt=''></img>
                    <div className='p'>
                        <Link to='/portfolio'><span>aaa</span></Link>
                        <Link><span>bbb</span></Link>
                        </div>
                </div>
            </div>
          );
    }
  
}

export default Header;
