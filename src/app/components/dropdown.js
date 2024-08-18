'use client'
import { useState,forwardRef } from 'react';
import ProductPrice from './price';

export default function Dropdown({onSelect}) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        const value= event.target.value;
        setSelectedOption(event.target.value);
        onSelect(value);
    };

    return (
        <div className="w-64">
            <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="w-full p-2 border rounded-lg"
            >
                <option value="" disabled>Select an option</option>
                <option value="10%">10% off</option>
                <option value="100">{ProductPrice(100)} off</option>
            </select>
        </div>
    );
}
