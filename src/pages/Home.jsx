import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import CustomSelect from '../components/CustomSelect'
import { states } from '../data/states'
import { validationSchema } from '../schemas'
import { useDispatch, useSelector } from 'react-redux'
import { submitForm } from '../features/createSlice'
// import Modal from '../components/Modal'
import Modal from '@aissetousck/oc-14-modal-library/dist/components/Modal'

/**
 * Display the form that register an employee
 * @returns {JSX.Element} Home component
 */
const Home = () => {
  const [open, isOpen] = useState(false)
  const employees = useSelector((state) => state.employees.employees)
  const dispatch = useDispatch()

  return (
    <div className="home">
      <h1>Create Employee</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          birthDate: '',
          startDate: '',
          department: '',
          street: '',
          city: '',
          state: '',
          zipCode: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          values.id = employees.length + 1
          dispatch(submitForm(values))
          isOpen(true)
          resetForm()
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div className="form__content">
              <div className="form__wrapper">
                <CustomInput label="First Name" name="firstName" type="text" />
                <CustomInput label="Last Name" name="lastName" type="text" />
                <CustomInput
                  label="Date of Birth"
                  name="birthDate"
                  type="date"
                />
                <CustomInput label="Start Date" name="startDate" type="date" />
                <CustomSelect label="Department" name="department">
                  <option value="">Select a department</option>
                  <option value="sales">Sales</option>
                  <option value="marketing">Marketing</option>
                  <option value="engineering">Engineering</option>
                  <option value="human-resources">Human Resources</option>
                  <option value="legal">Legal</option>
                </CustomSelect>
              </div>
              <div className="form__wrapper">
                <CustomInput label="Street" name="street" type="text" />
                <CustomInput label="City" name="city" type="text" />
                <CustomSelect label="State" name="state">
                  <option value="">Select a state</option>
                  {states.map((state) => (
                    <option value={state.name} key={state.abbreviation}>
                      {state.name}
                    </option>
                  ))}
                </CustomSelect>
                <CustomInput label="Zip Code" name="zipCode" type="number" />
              </div>
              <button type="submit" className="form__submit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <Modal open={open} isOpen={isOpen} message="Employee created !" />
    </div>
  )
}

export default Home
