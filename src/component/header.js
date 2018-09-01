import React, { Component } from 'react'

const  Header = () => {

   return(<div className='navbar' style={{display:'flex'}}>
    <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"style={{width: '268 px' , height:' 33px'}} />
    <div className="contact"  style={{marginLeft:'53%', marginTop:'1%'}}>
        <a  href="#">About us</a>
        <a style={{marginLeft: '69px'}} href="#">Career</a>
        <a style={{marginLeft: '51px'}} href="#">Departments</a>
     </div>
    </div>)

}
export default Header;