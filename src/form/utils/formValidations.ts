import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string().required('Required').min(3, 'At least 3 characters'),
  email: Yup.string().required('Required').email('Input a valid email'),
  password1: Yup.string().required('Required').min(6, 'At least 6 characters'),
  password2: Yup.string().required('Required').oneOf([Yup.ref('password1')], 'Passwords are not the same'),
  gender: Yup.string().required('Required'),
  hobbies: Yup.array().min(1, 'Select at least one option'),
  team: Yup.string().required('Select at least one option'),
  terms: Yup.boolean().required('Required').isTrue('Must accept the terms of use'),
});