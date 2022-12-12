import React from 'react'
import { useField } from 'formik'

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  /* console.log('fields: ', field)
  console.log('meta: ', meta) */
  return (
    <div className="form__input">
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? 'input-error' : ''}
      />
      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
    </div>
  )
}

export default CustomInput
