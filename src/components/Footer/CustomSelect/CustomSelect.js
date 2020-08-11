import React, { useState } from 'react';
import './CustomSelect.css';

const CustomSelect = props => {
    const [listOpen, setlistOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const options = props.options

    const toggling = () => setlistOpen(!listOpen);
  
    const onOptionClicked = value => () => {
      setSelectedOption(value);
      setlistOpen(false);
    };
  
    return (
      <div className='mainContainer'>
        <div className='dropdownContainer'>
          <div className='dropdownHeader' onClick={toggling}>
            {selectedOption || "English"} <span style={{verticalAlign: 'middle'}}>^</span>
          </div>
          {listOpen && (
            <div className='dropdownListHeader'>
              <ul className='dropdownList'>
                {options.map(option => (
                    <li
                        className='listItem'
                        onClick={onOptionClicked(option)}
                        key={Math.random()}
                    >
                        {option}
                    </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
};

export default CustomSelect;