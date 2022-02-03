import React from 'react';

import './card.styles.css';

export const Card=(props)=>(
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=98x98`} alt="monster" />
       <h2 className='name'>{props.monster.name}</h2> 
        <p>{props.monster.email}</p>
    </div>
);