import React from 'react';
import './EquipmentCard.css';

const EquipmentCard = props => {
    return (
        <div className='e-card'>
            <div className='equImgContainer'>
                <img src={require(`../../../img/${props.image}.png`)} className='equImg' />
            </div>
            <p className='equTitle'>{props.title}</p>
        </div>
    );
};

export default EquipmentCard;