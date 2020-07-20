import React from 'react';

import {GroupContainer, FormTextAreaContainer, FormInputLabel} from './form-input.styles';

const FormTextArea = ({ handleChange, label, ...otherProps}) => (
    <GroupContainer>
        <FormTextAreaContainer onChange={handleChange} {...otherProps} />
        {
            label ?
            (<FormInputLabel 
                className={`
                        ${otherProps.value.length ? 
                        'shrink' : 
                        null} 
                        label`
            }>
                {label}
            </FormInputLabel>)
            : null
        }
    </GroupContainer>
);

export default FormTextArea;