import React from 'react';
import './LibraryCard.css';

const LibraryCard = props => {
    let seriesMask;
    let videoData;

    if (props.cardType === 'series') {
        seriesMask = (
            <div className='maskContainer'>
                <div className='seriesMask'></div>
                <h2 className='maskCount'>{props.count}</h2>
                <h3 className='maskWorkout'>workouts</h3>
                <img src={require('../../../img/playlist.png')} className='maskIcon' />
            </div>
        );
    };

    if (props.cardType === 'video') {
        videoData = (
            <div className='videoDataContainer'>
                <img src={require('../../../img/vidTime.png')} className='videoDataIcon' />
                {props.time}
                <img src={require('../../../img/vidViews.png')} className='videoDataIcon' />
                {props.views}
            </div>
        );
    };

    return (
        <div className='l-card'>
            <div className='libImgContainer'>
                <img src={require(`../../../img/${props.image}.png`)} className='libImg' />
                {seriesMask}
            </div>
            <div className='titleContainer'>
                <h3>{props.title}</h3>
                <img src={require(`../../../img/${props.icon}.png`)} className='icoImg' />
            </div>
            {videoData}
            <span className='detailsButton'>VIEW DETAILS</span>
        </div>
    );
};

export default LibraryCard;