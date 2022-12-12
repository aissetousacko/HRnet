import { Form, Formik } from 'formik'
import React from 'react'
import CustomInput from '../components/CustomInput'
import CustomSelect from '../components/CustomSelect'
import { validationSchema } from '../schemas'

const Home = () => {
  return (
    <div className="home">
      <h1>Create Employee</h1>

      {/* <form className="form">
        <div className="form__content">
          <div className="form__wrapper">
            <div className="form__input">
              <label>First Name</label>
              <input type="text" id="firstName" />
            </div>
            <div className="form__input">
              <label>Last Name</label>
              <input type="text" id="firstName" />
            </div>
            <div className="form__input">
              <label>Date of Birth</label>
              <input type="text" id="firstName" />
            </div>
            <div className="form__input">
              <label>Start Date</label>
              <input type="text" id="firstName" />
            </div>
          </div>

          <div className="form__wrapper">
            <div className="form__input">
              <label>City</label>
              <input type="text" id="firstName" />
            </div>
            <div className="form__input">
              <label>State</label>
              <input type="text" id="firstName" />
            </div>
            <div className="form__input">
              <label>Department</label>
              <input type="text" id="firstName" />
            </div>
            <div className="form__input">
              <label>Street</label>
              <input type="text" id="firstName" />
            </div>
            <div className="form__input">
              <label>Zip Name</label>
              <input type="text" id="firstName" />
            </div>
          </div>
        </div>

        <button className="form__submit">Submit</button>
      </form> */}

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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
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
                <CustomInput label="State" name="state" type="text" />
                <CustomInput label="Zip Code" name="zipCode" type="number" />
              </div>
              <button type="submit" className="form__submit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Home
