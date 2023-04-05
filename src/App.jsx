import { useState } from 'react'
import logo from '../src/images/Frame.png'

import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const [signBool, setSignBool] = useState(true)
  const [passwordShown, setPasswordShown] = useState(false)
  return (
    <>
      <div className="App">
        <img className="wagmi-logo" src={logo} alt="" />
        <p className="form-header">Sign {signBool ? 'in' : 'up'}</p>
        {signBool ? (
          <div>
            <Login
              passwordShown={passwordShown}
              setPasswordShown={setPasswordShown}
            />
          </div>
        ) : (
          <div>
            <Register
              passwordShown={passwordShown}
              setPasswordShown={setPasswordShown}
            />
          </div>
        )}
        <p className="sign-footer">
          {signBool
            ? "Don't you have an account ?"
            : 'Already have an account?'}

          <span onClick={() => setSignBool(!signBool)}>
            {signBool ? 'Sign up here' : 'Sign in here'}
          </span>
        </p>
      </div>
    </>
  )
}

export default App
