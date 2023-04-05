import { Formik } from 'formik'
import * as Yup from 'yup'

const InForm = ({ passwordShown, setPasswordShown }) => {
  const handleSubmitForm = (values) => {
    console.log(values)
  }
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmitForm}
      validationSchema={validationSchema}
    >
      {({ values, touched, handleChange, handleSubmit, errors }) => (
        <form onSubmit={handleSubmit}>
          <p className="input-header">Email</p>
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="mail@website.com"
          />
          {errors.email && touched.email ? (
            <p className="input-header">{errors.email}</p>
          ) : null}

          <p className="input-header">Enter your password</p>
          <div className="pass-box">
            <input
              name="password"
              type={passwordShown ? 'text' : 'password'}
              placeholder="min 8 character"
              onChange={handleChange}
            />
            <i
              class={`fa-regular ${!passwordShown ? 'fa-eye' : 'fa-eye-slash'}`}
              onClick={() => setPasswordShown(!passwordShown)}
            ></i>
          </div>
          {errors.password && touched.password ? (
            <p className="input-header">{errors.password}</p>
          ) : null}

          <div className="form-check">
            <div className="left">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <div className="right">
              <a href="#" className="a-forgot">
                Forgot Password ?
              </a>
            </div>
          </div>

          <a
            href="https://wagmi-gg.netlify.app/home"
            // onClick={handleSubmit}
            type="submit"
            className="submit-button"
          >
            Sign In
          </a>
        </form>
      )}
    </Formik>
  )
}
export default InForm

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Lütfen geçerli bir email adresi girin')
    .required('Email'),
  password: Yup.string()
    .required('Şifre alanı boş bırakılamaz')
    .min(8, 'Şifreniz en az 8 karakterli olmalıdır'),
})
