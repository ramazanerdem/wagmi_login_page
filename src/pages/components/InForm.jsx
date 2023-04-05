import { Formik } from 'formik'
import * as Yup from 'yup'

const InForm = ({ passwordShown, setPasswordShown }) => {
  const handleSubmitForm = (values) => {
    console.log(values)
  }
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      // onSubmit={handleSubmitForm}
      onSubmit={(location.href = 'https://wagmi-login-page.netlify.app/')}
      validationSchema={validationSchema}
    >
      {({ values, touched, handleChange, handleSubmit, errors }) => (
        <form
        // onSubmit={handleSubmit}
        // onSubmit={(location.href = 'http://localhost:5174/home')}
        >
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
              <a href="#">Forgot Password ?</a>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            // onClick={(location.href = 'http://localhost:5174/home')}
            type="submit"
            className="submit-button"
          >
            Sign In
          </button>
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
