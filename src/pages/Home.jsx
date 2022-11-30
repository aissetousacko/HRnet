import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <h1>Create Employee</h1>

      <form className="form">
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
      </form>

      {/* <Link to="/employees">View Employees</Link> */}
    </div>
  )
}

export default Home
