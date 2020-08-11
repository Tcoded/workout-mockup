import React from 'react';
import './ReviewCard.css';

const ReviewCard = props => {
    return (
        <div className='r-card'>
            <img src={require(`../../../img/${props.image}.png`)} className='card_logo'></img>
            <p className='card_text'>{props.blurb}</p>
        </div>
    );
};

export default ReviewCard;