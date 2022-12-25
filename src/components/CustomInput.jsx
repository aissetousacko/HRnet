import React from 'react'
import { useField } from 'formik'

/**
 * Custom the text and date input field
 * @param {String} label
 * @param {String} props
 * @returns {JSX.Element} CustomInput component
 */
const CustomInput = ({ label, id, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="form__input">
      <label htmlFor={field.name}>{label}</label>
      <input
        {...field}
        {...props}
        id={id}
        className={meta.touched && meta.error ? 'input-error' : ''}
      />
      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
    </div>
  )
}

export default CustomInput
