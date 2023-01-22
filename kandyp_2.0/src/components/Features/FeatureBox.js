import React from 'react'
import './Feature.css';

function FeatureBox(props) {
    return (
        
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image} alt='' />
            </div>
            <div className='s-b-text'>
                <h2>{props.title}</h2>
                <p>{props.disc}</p>
            </div>
            </div>
    
    )
}

export default FeatureBox;

 
            
