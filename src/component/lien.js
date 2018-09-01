import React, { Component } from 'react'
const Lien=()=>{
    return(<div className='lien' style={{display:'flex'}}>
    <h1 style={{color:'#00b39b'}}> We are a global  <br/>
    company with local culture
			</h1>
<ul style={{listStyleType:'none', display:'flex', marginTop:'45px'}} className='brands__logos'>
    <li>
     <img style={{width: '14px', marginLeft:''}} src="https://www.docplanner.com/img/sygnet.png" />
     <a href="#">Znanylekarza</a>
     </li> 
    <li>
    <img style={{width: '14px', marginLeft:'99px'}} src="https://www.docplanner.com/img/sygnet.png" />
    <a  href="#">Doctoralia</a>
    </li>  
    <li> 
    <img style={{width: '14px', marginLeft:'145px'}} src="https://www.docplanner.com/img/sygnet.png" />     
    <a  href="#">Miodottora</a>
    </li> 
    <li> 
    <img style={{width: '14px', marginLeft:'143px'}} src="https://www.docplanner.com/img/sygnet.png" />      
     <a  href="#">Znanylekarz</a>  
     </li>  
            </ul> 


    </div> )


}
export default Lien;