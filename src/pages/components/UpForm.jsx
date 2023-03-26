const UpForm = ({ passwordShown, setPasswordShown }) => {
  return (
    <>
      <form>
        <div className="name">
          <div className="left">
            <p className="input-header">Name</p>
            <input type="text" placeholder="John" />
          </div>
          <div className="right">
            <p className="input-header">Surname</p>
            <input type="text" placeholder="Doe" />
          </div>
        </div>
        <p className="input-header">Username</p>
        <input type="text" placeholder="@johndoe" />
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

        <button type="submit" className="submit-button">
          Sign In
        </button>
      </form>
    </>
  )
}
export default UpForm
