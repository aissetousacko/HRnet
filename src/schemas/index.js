import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'First Name must be at least 3 characters long')
    .required('Required'),
  lastName: yup
    .string()
    .min(3, 'Last Name must be at least 3 characters long')
    .required('Required'),
  birthDate: yup.date().required('Required'),
  startDate: yup.date().required('Required'),
  department: yup
    .string()
    .oneOf(
      ['sales', 'marketing', 'engineering', 'human-resources', 'legal'],
      'invalid Department'
    )
    .required('Required'),
  street: yup.string().required('Required'),
  city: yup.string().required('Required'),
  state: yup.string().required('Required'),
  zipCode: yup.number().positive().integer().required('Required'),
})
