import InForm from './components/InForm'
import Google from './components/Google'

const Login = ({ passwordShown, setPasswordShown }) => {
  return (
    <>
      <Google />
      <InForm
        passwordShown={passwordShown}
        setPasswordShown={setPasswordShown}
      />
    </>
  )
}
export default Login
