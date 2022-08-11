import { ErrorMessage, Field, Form, Formik } from 'formik';

import { initialValues } from '../utils/initialValuesForm';
import { validationSchema } from '../utils/formValidations';

import '../../styles/styles.css';
import { FormValues } from '../interfaces/interfaces';

export const FormPage = () => {

  const onSubmit = (values: FormValues) => {
    console.log(values);
    alert(JSON.stringify(values, null, 3));
  }
  return (
    <div className="container">
      <h1>Form R1 - Formik</h1>
      <Formik
        initialValues={ initialValues }
        onSubmit={ onSubmit }
        validationSchema={ validationSchema }
      >
        {
          ({ errors, touched }) => {
            // console.log({errors});
            return <Form noValidate>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <Field
                  name="name"
                  type="text"
                  className={ `form-control ${ (errors.name && touched.name) ? 'is-invalid' : ''} ${ (!errors.name && touched.name) ? 'is-valid' : ''}`}
                  placeholder="Input your name"
                />
                <ErrorMessage
                  name="name"
                  component="div" 
                  className="invalid-feedback"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <Field
                  name="email"
                  type="email"
                  className={ `form-control ${ (errors.email && touched.email) ? 'is-invalid' : ''} ${(!errors.email && touched.email) ? 'is-valid' : ''}`}
                  placeholder="Input your email"
                />
                <ErrorMessage
                  name="email"
                  component="div" 
                  className="invalid-feedback"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <Field
                  name="password1"
                  type="password"
                  className={ `form-control ${(errors.password1 && touched.password1) ? 'is-invalid' : ''} ${(!errors.password1 && touched.password1) ? 'is-valid' : ''}`}
                  placeholder="Input your password"
                />
                <ErrorMessage
                  name="password1"
                  component="div" 
                  className="invalid-feedback"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Repeat Password</label>
                <Field
                  name="password2"
                  type="password"
                  className={ `form-control ${(errors.password2 && touched.password2) ? 'is-invalid' : ''} ${(!errors.password2 && touched.password2) ? 'is-valid' : ''}`}
                  placeholder="Input your password"
                />
                <ErrorMessage
                  name="password2"
                  component="div" 
                  className="invalid-feedback"
                />
              </div>

              <div className="mb-3">
                <p className="form-label">Gender</p>
                <div className="form-check form-check-inline">
                  <Field
                    name="gender"
                    type="radio"
                    value="male"
                    className={ `form-check-input ${(errors.gender && touched.gender) ? 'is-invalid' : ''} ${(!errors.gender && touched.gender) ? 'is-valid' : ''}`}
                  />
                  <label className="form-check-label">
                    Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <Field
                    name="gender"
                    type="radio"
                    value="female"
                    className={ `form-check-input ${(errors.gender && touched.gender) ? 'is-invalid' : ''} ${(!errors.gender && touched.gender) ? 'is-valid' : ''}`}
                  />
                  <label className="form-check-label">
                    Female</label>
                </div>
                <div className="form-check form-check-inline">
                  <Field
                    name="gender"
                    type="radio"
                    value="other"
                    className={ `form-check-input ${(errors.gender && touched.gender) ? 'is-invalid' : ''} ${(!errors.gender && touched.gender) ? 'is-valid' : ''}`}
                  />
                  <label className="form-check-label">
                    Other</label>
                </div>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="error-message"
                  // TODO: entender
                  // className="invalid-feedback"
                />
              </div>

              <div className="mb-3">
                <p className="form-label">Hobbies</p>
                <div className="form-check form-check-inline">
                  <Field
                    name="hobbies"
                    type="checkbox"
                    value="sports"
                    className={ `form-check-input ${(errors.hobbies && touched.hobbies) ? 'is-invalid' : ''} ${(!errors.hobbies && touched.hobbies) ? 'is-valid' : ''}`}
                  />
                  <label className="form-check-label">
                    Sports</label>
                </div>
                <div className="form-check form-check-inline">
                  <Field
                    name="hobbies"
                    type="checkbox"
                    value="Videogames"
                    className={ `form-check-input ${(errors.hobbies && touched.hobbies) ? 'is-invalid' : ''} ${(!errors.hobbies && touched.hobbies) ? 'is-valid' : ''}`}
                  />
                  <label className="form-check-label">
                    Videogames</label>
                </div>
                <div className="form-check form-check-inline">
                  <Field
                    name="hobbies"
                    type="checkbox"
                    value="Traveling"
                    className={ `form-check-input ${(errors.hobbies && touched.hobbies) ? 'is-invalid' : ''} ${(!errors.hobbies && touched.hobbies) ? 'is-valid' : ''}`}
                  />
                  <label className="form-check-label">
                    Traveling</label>
                </div>
                <ErrorMessage
                  name="hobbies"
                  component="div"
                  className="error-message"
                  // TODO: entender
                  // className="invalid-feedback"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Team</label>
                <Field
                  name="team" 
                  as="select" 
                  className={ `form-select ${(errors.team && touched.team) ? 'is-invalid' : ''} ${(!errors.team && touched.team) ? 'is-valid' : ''}`}
                >
                  <option value="">Select an option</option>
                  <option value="react">React</option>
                  <option value="angular">Angular</option>
                  <option value="vue">Vue</option>
                  <option value="svelte">Svelte</option>
                </Field>
                <ErrorMessage 
                  name="team"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="mb-3">
                <div className="form-check form-check-inline">
                  <Field
                    name="terms"
                    type="checkbox"
                    className={ `form-check-input ${(errors.terms && touched.terms) ? 'is-invalid' : '' } ${(!errors.terms && touched.terms) ? 'is-valid' : '' }`}
                  />
                  <label className="form-check-label">Terms</label>
                </div>
                <ErrorMessage
                  name="terms"
                  component="div"
                  className="error-message"
                  // className="invalid-feedback"
                />
              </div>

              {/* button */}
              <div>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Send
                </button>
              </div>


            </Form>
          }
        }
      </Formik>
    </div>
  )
}

/* 
export interface FormValues {
  name: string;
  email: string;
  password1: string;
  password2: string;
  gender: string; // radio group
  hobbies: string[]; // checkbox group
  team: string; // select
  terms: boolean; // checkbox
} 
*/
