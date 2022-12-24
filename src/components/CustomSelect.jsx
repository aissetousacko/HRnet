import React from 'react'
import { useField } from 'formik'

/**
 * Custom the select input field
 * @param {String} label
 * @param {String} props
 * @returns {JSX.Element} CustomSelect component
 */
const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="form__input">
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? 'input-error' : ''}
      />
      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
    </div>
  )
}

export default CustomSelect
