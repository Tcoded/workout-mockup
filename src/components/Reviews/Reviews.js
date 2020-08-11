import React from 'react';
import './Reviews.css'

import ReviewCard from './ReviewCard/ReviewCard';

const Reviews = () => {
    return (
        <div className='review_container'>
            <img src={require(`../../img/larrow.png`)} className='card_arrow left-arrow'></img>
            <ReviewCard
                image='rev1'
                blurb='“You focus on putting in the work, and the technology handles the rest.”'
            />
            <ReviewCard
                image='rev2'
                blurb='“Literally transports you from home to wherever you choose to run.”'
            />
            <ReviewCard
                image='rev3'
                blurb='“Breathes new life into a tired, old running routine.”'
            />
            <img src={require(`../../img/rarrow.png`)} className='card_arrow right-arrow'></img>
        </div>
    );
};

export default Reviews;