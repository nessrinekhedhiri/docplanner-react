import React, { Component } from 'react';
import Header from  './component/header';
import Introd from'./component/introduction';
import  Patient from './component/blocservice';
import Lien from './component/lien';
import Carditem from './component/card';
import Playlist from './component/paylist';
import './App.css';
const exemple1 = {
  category: 'For patients',
  title: 'Find a doctor, book a visit and solve...',
  background: '#5dc6b0',
  image: 'https://www.docplanner.com/img/screen-marketplace@2x.png'
}
const exemple2={
  category:'for doctor',
  title:'Save time managing visits and cut no-shows by half',
  background:'#3d83df',
  image:' https://www.docplanner.com/img/screen-saas@2x.png'
}
const list=
  <select>
    <option>Australia</option>
    <option>UK</option>
    <option>Argentina</option>
    <option>Colombia</option>
  </select>
   const carditem1={
    title:<span>Leader in <br />8 countries</span>,
    icon:'https://www.docplanner.com/img/flag.png',
    description:"Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile",
   }
   const carditem2={
    title:"600 000 appointments",
    icon:"https://www.docplanner.com/img/visits.png",
    description:"booked last month"
   }
   const carditem3={
    title:<span>20 million unique <br /> patients</span>,
    icon:'https://www.docplanner.com/img/patients.png',
    description:'visit us every month',
   }
   const carditem4={
    title:<span>35 000 active doctors <br /> doctors</span>,
    icon:'https://www.docplanner.com/img/doctors.png',
    description:'trust in our solutions',
   }

   const pays1=
{
image:'https://www.docplanner.com/images/warsaw.png',
title:'Warsaw'
}
const pays2=
{
image:'https://www.docplanner.com/images/barcelona.png',
title:'Barcelona'
}
const pays3=
{
image:'https://www.docplanner.com/images/istanbul.png',
title:'Istanbul'
}
const pays4=
{
image:'https://www.docplanner.com/images/rome.png',
title:'Rome'
}
const pays5=
{
image:'https://www.docplanner.com/images/mexico-city.png',
title:'Mexico City'
}
const pays6=
{
image:'https://www.docplanner.com/images/curitiba.png',
title:'Curitiba'
}
const playpay1=[pays1,pays2,pays3]
const playpay2=[pays4,pays5,pays6]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Introd/>
        <div className="container">
        <Patient liste={list} patient={exemple1}/>
        <Patient  patient={exemple2}/>
        </div>
        <Lien/>
        <div className='card'>
        <div>
        <h1 style={{color: 'rgb(0, 179, 155)'}}>biggest healthcare platform	
        The world's
        <br/> </h1>
        <p>	We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.	</p>
        <img src='https://www.docplanner-platform.com/img/general/about-us/img/logo.png'/>
        </div>
        <div className='section1'>
        <Carditem card={carditem1}/>
        <Carditem card={carditem2}/>
        </div>
        <div className='section2'>
        <Carditem card={carditem3}/>
        <Carditem card={carditem4}/>
        </div>
        </div>
        <div className='section3'>
        <h1 style={{color: 'rgb(0, 179, 155)'}}>
				Improve the lives of millions.
				Change&nbsp;yours forever
			</h1>
      <p>
				More than 500 team mates share our same vision, goals and passion. 
        With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.
			</p>
        </div>
        <div style={{display:'flex', justifyContent: 'space-around',padding: '11%',marginTop:'-10%'}}>

       <Playlist pays={playpay1}/>
       
       </div>
       <div style={{display:'flex',justifyContent: 'space-around',padding: '11%',marginTop:'-21%'}}>
       <Playlist pays={playpay2}/>
       
       </div>
      </div>
      
    );
  }
}

export default App;
