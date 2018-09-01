import React, { Component } from 'react';
import Section_5 from './pay'; 
const  Playlist=(props)=>{
 return   props.pays.map((el,i)=> <Section_5 key={i} pay={el}/> )



}
export default Playlist;