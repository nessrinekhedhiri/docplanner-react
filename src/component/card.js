import React, { Component } from 'react'
import './card.css'
const Carditem=({card:{icon, title, description}})=>{
    return(<div className="card1">
    <img src={icon} />
    <h2 className="title">{title}</h2>
    <p className="description">
      {description}
    </p>
  </div>

    )

}
export default Carditem;