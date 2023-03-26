const InForm = ({ passwordShown, setPasswordShown }) => {
  return (
    <>
      <form>
        <p className="input-header">Email</p>
        <input type="email" placeholder="mail@website.com" />
        <p className="input-header">Enter your password</p>
        <div className="pass-box">
          <input
            type={passwordShown ? 'text' : 'password'}
            placeholder="min 8 character"
          />
          <i
            class={`fa-regular ${!passwordShown ? 'fa-eye' : 'fa-eye-slash'}`}
            onClick={() => setPasswordShown(!passwordShown)}
          ></i>
        </div>

        <div className="form-check">
          <div className="left">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <div className="right">
            <a href="#">Forgot Password ?</a>
          </div>
        </div>

        <button type="submit" className="submit-button">
          Sign In
        </button>
      </form>
    </>
  )
}
export default InForm
