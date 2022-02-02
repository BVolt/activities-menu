import React from 'react';


//Our individual activity component using the object properties as parameters
const Activity = ({name, price, description, image, category}) => {
  return <article className="activity">
    <img className="photo" src={image} alt=""/>
    <div className="act-info">
        <header>
            <h4 style={{color: "black"}}>{name}</h4>
            <h4 className="price">${price} per person</h4>
        </header>
        <p>{description}</p>
    </div>
  </article>;
};

export default Activity;
