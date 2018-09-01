import React, { Component } from 'react';

const  Patient=({liste,patient:{ background, category, title, image}})=>{
   
 return( <div className='patient' style={{background: background, borderRadius:' 3%', marginLeft:'2%', height:'310px', color:'white', width:'56%'  }}>
    <p className='category'>{category}</p>
    <h1 style={{ fontWeight:'normal'}} className='title'>{title}</h1>
    <div>{liste}</div>
    <img className='screenshot'style={{height:' 48%',marginLeft:' 50%'}} src={image}/>
    
  </div>)
  

}
export default Patient;