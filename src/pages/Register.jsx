import Google from './components/Google'
import UpForm from './components/UpForm'

const Register = ({ passwordShown, setPasswordShown }) => {
  return (
    <>
      <Google />
      <UpForm
        passwordShown={passwordShown}
        setPasswordShown={setPasswordShown}
      />
    </>
  )
}
export default Register
