import React from 'react';
import './Equipment.css';

import EquipmentCard from './EquipmentCard/EquipmentCard';

const Equipment = () => {
    return (
        <div className='equipment_container'>
            <EquipmentCard title='Treadmills' image='equ1' />
            <EquipmentCard title='Bikes' image='equ2' />
            <EquipmentCard title='Ellipticals' image='equ3' />
            <EquipmentCard title='Strength' image='equ4' />
        </div>
    );
};

export default Equipment;