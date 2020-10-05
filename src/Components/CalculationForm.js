import '../App.css';

import { Field, reduxForm } from 'redux-form'

import React from 'react';
import { useSelector } from 'react-redux'

const validate = values => {
  const errors = {}

  if (!values.principal) {
    errors.principal = 'Required'
  }

  if (!values.rate) {
    errors.rate = 'Required'
  }

  if (!values.years) {
    errors.years = 'Required'
  }

  return errors
}

const renderField = ({
  input,
  label,
  meta: { touched, error, warning },
  placeholder,
  type,
}) => (
  <>
    <label>{label}</label>
    <input className="Field" {...input} placeholder={placeholder} type={type} />
    {touched &&
      ((error && <span className="Error">{error}</span>) ||
        (warning && <span className="Error">{warning}</span>))}
  </>
)

function CalculationForm({handleSubmit, valid}) {
  return (
    <form onSubmit={handleSubmit}>
       <div>
         <Field
           component={renderField}
           label="Principal"
           name="principal"
           placeholder="5000"
           type="number"
          />
       </div>

       <div>
         <Field
           component={renderField}
           label="Rate"
           name="rate"
           placeholder="2.5"
           type="number"
         />
       </div>

       <div>
         <Field
           component={renderField}
           label="Years"
           name="years"
           placeholder="5"
           type="number"
         />
       </div>

       <button disabled={!valid} type="submit">Submit</button>
     </form>
  )
}

export default reduxForm({
  form: 'calculate_principal',
  validate,
})(CalculationForm)
