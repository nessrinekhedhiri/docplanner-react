import React, { Component } from 'react'
const Section_5=({pay:{image,title}})=>
{
   return(
      <div className='Section_5'>
         <a href="#">  <img className='image_pays' src={image} style={{ borderRadius:'2%'}}/>
         <div style={{display:'flex'}} >
           <p>{title}</p>
           <input type='button' value='SEE OPENINGS' style={{height:'39px',marginTop:'6%', marginLeft: '126px'}}/>
           </div></a>

       </div>

   )
}
export default Section_5;