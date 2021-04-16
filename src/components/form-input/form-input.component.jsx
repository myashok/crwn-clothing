import React from 'react';
import styles from './form-input.styles.module.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className={styles['group']}>
    <input className={styles['form-input']} onChange={handleChange} {...otherProps} />
    {
      label ? (
        <label
          className={`${otherProps.value.length ? 'shrink' : ''
            } form-input-label`}
        >
          {label}
        </label>
      )
        : null
    }
  </div>
)
export default FormInput;