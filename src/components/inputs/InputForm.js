import React from 'react';
import PropTypes from 'prop-types';
import 'components/inputs/input-form.css';

export const InputForm = (props) => {
    const { name, labelText, value, onChange, labelClassName, inputClassName, type } = props;
    return(
        <React.Fragment>
            <label htmlFor={name} className={`input-label ${labelClassName}`}>
                {labelText}
            </label>
            <input
                type={type}
                value={value}
                id={name}
                className={`input-form ${inputClassName}`}
                onChange={onChange}
                name={name}
            />
        </React.Fragment>
    );
};

InputForm.defaultProps = {
    type: "text"
};

InputForm.propTypes = {
    name: PropTypes.string,
    labelText: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onChange: PropTypes.func,
    type: PropTypes.string
};