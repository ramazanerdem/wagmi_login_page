import { Formik } from 'formik'
import * as Yup from 'yup'

const UpForm = ({ passwordShown, setPasswordShown }) => {
  const handleSubmitForm = (values) => {
    console.log(values)
  }
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          username: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmitForm}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="name">
              <div className="left">
                <p className="input-header">Name</p>
                <input
                  onChange={handleChange}
                  name="name"
                  type="text"
                  placeholder="John"
                />
                {errors.name && touched.name ? (
                  <p className="input-header">{errors.name}</p>
                ) : null}
              </div>
              <div className="right">
                <p className="input-header">Surname</p>
                <input
                  onChange={handleChange}
                  name="surname"
                  type="text"
                  placeholder="Doe"
                />
                {errors.surname && touched.surname ? (
                  <p className="input-header">{errors.surname}</p>
                ) : null}
              </div>
            </div>
            <p className="input-header">Username</p>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="@johndoe"
            />
            {errors.username && touched.username ? (
              <p className="input-header">{errors.username}</p>
            ) : null}
            <p className="input-header">Email</p>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="mail@website.com"
            />
            {errors.email && touched.email ? (
              <p className="input-header">{errors.email}</p>
            ) : null}
            <p className="input-header">Enter your password</p>
            <div className="pass-box">
              <input
                onChange={handleChange}
                name="password"
                type={passwordShown ? 'text' : 'password'}
                placeholder="min 8 character"
              />
              <i
                class={`fa-regular ${
                  !passwordShown ? 'fa-eye' : 'fa-eye-slash'
                }`}
                onClick={() => setPasswordShown(!passwordShown)}
              ></i>
            </div>
            {errors.password && touched.password ? (
              <p className="input-header">{errors.password}</p>
            ) : null}

            <a
              href="https://wagmi-gg.netlify.app/home"
              // onSubmit={handleSubmit}
              type="submit"
              className="submit-button"
            >
              Sign Up
            </a>
          </form>
        )}
      </Formik>
    </>
  )
}
export default UpForm

const validationSchema = Yup.object({
  name: Yup.string().required('Lütfen adınızı girin'),
  surname: Yup.string().required('Lütfen soyadınızı girin'),
  username: Yup.string()
    .required('Lütfen bir kullanıcı adı girin')
    .min(5, 'Kullanıcı adınız en az 5 karakterli olmalıdır'),
  email: Yup.string()
    .required('Lütfen email adresinizi girin')
    .email('Email girdiğinizden emin olun'),
  password: Yup.string()
    .required('Lütfen şifrenizi girin')
    .min(8, 'Şifreniz en az 8 karakterli olmalıdır'),
})
