import logo from '../../images/google.png'

const Google = () => {
  return (
    <>
      <button className="google-button">
        <img className="google-logo" src={logo} alt="" />
        <p>Sign In with Google</p>
      </button>
      <div className="line-box">
        <hr className="line" />
        <span>or</span>
        <hr className="line" />
      </div>
    </>
  )
}
export default Google
