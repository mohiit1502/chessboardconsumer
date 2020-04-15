import React from 'react';
import PropTypes from 'prop-types';
import './SelectOption.component.scss';

const SelectOption = ({meta}) => {
  const optionList = meta.options.map((_option, index) => {
    return (
        <option value={_option.value} key={index}>
            {_option.label}
        </option>
    )
  })
  return (
    <div
        className={`form-wrapper__form-row c-form-field ${
            meta.container_class ? meta.container_class : ''
        }`}
        aria-required={meta.aria_required}
    >
        <label htmlFor={meta.id}>
            {meta.validation.required.isRequired && (
                <span className="required-indicator">* </span>
            )}
            {meta.label}
        </label>
        {meta.secondaryLabel ? (
            <span className="field--label-description">{meta.secondaryLabel}</span>
        ) : null}
        <div className="form-wrapper__field-wrapper">
            {meta.error && (
                <span className="form-wrapper__field-error">{meta.errorMessage}</span>
            )}
            <select
                id={meta.id}
                name={meta.name}
                onBlur={(e) =>
                    meta.handlers.onBlurHandler(meta.validation, meta.customBlurHandler, e)
                }
                value={
                    meta.fieldValues.stateValue
                        ? meta.fieldValues.stateValue
                        : meta.fieldValues.propsValue
                        ? meta.fieldValues.propsValue
                        : meta.value
                }
                onChange={meta.handlers.onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    </div>
  );
};

SelectOption.props = {
  meta: PropTypes.object
}

export default SelectOption;