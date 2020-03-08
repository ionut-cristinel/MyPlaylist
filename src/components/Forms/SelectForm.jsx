import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


const SelectForm = props => {

    const { 
        options, 
        onChange,
        inputType,
        stateProprety
    } = props;

    return (
        <div className="form-group">
            <select 
                className="form-control" 
                required
                onChange={(event) => onChange(event, inputType, stateProprety)}
            >
            {
                options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)
            }
            </select>
        </div>
    );
}

export default SelectForm;