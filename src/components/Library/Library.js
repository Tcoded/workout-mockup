import React from 'react';
import './Library.css'

import LibraryCard from './LibraryCard/LibraryCard';

const Library = props => {
    return (
        <div className='library_container'>
            <LibraryCard 
                cardType='video'
                image='lib1'
                time='30:53'
                views='6,248 M'
                icon='ico1'
                title='Lake Inniscarra, Ireland— Pyramid'
            />
            <LibraryCard 
                cardType='series'
                image='lib2'
                count='9'
                icon='ico2'
                title='Performance Series'
            />
            <LibraryCard 
                cardType='video'
                image='lib3'
                time='44:13'
                views='9,948 M'
                icon='ico3'
                title='Slow Pulls and Fast Intervals'
            />
            <LibraryCard 
                cardType='series'
                image='lib4'
                count='12'
                icon='ico4'
                title='20 Minutes to Toned'
            />
            <LibraryCard 
                cardType='video'
                image='lib5'
                time='36:22'
                views='8,648 M'
                icon='ico5'
                title='Charles Race, Boston, Massachusetts'
            />
            <LibraryCard 
                cardType='series'
                image='lib6'
                count='12'
                icon='ico6'
                title='Full-Body HIIT Series'
            />
            <LibraryCard 
                cardType='video'
                image='lib7'
                time='22:22'
                views='4,660 M'
                icon='ico7'
                title='Kafue River, Zambia—Power Stroke Pyramid'
            />
            <LibraryCard 
                cardType='series'
                image='lib8'
                count='16'
                icon='ico8'
                title='Shred & Burn Series'
            />
        </div>
    );
};

export default Library;