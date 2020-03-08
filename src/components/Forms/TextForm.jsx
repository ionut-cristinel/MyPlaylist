import React from "react";
import TextField from '@material-ui/core/TextField';


const TextForm = props => {

    const { 
        label, 
        type, 
        size, 
        onChange,
        inputType,
        stateProprety
    } = props;

    return <TextField 
        type={type} 
        label={label} 
        size={size}
        required
        fullWidth 
        variant="outlined" 
        onChange={(event) => onChange(event, inputType, stateProprety)}
    /> ;
}

export default TextForm;