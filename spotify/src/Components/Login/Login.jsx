import './Login.css';
import user from './Assets/user.png';
import email from './Assets/mail.png';
import pass from './Assets/padlock.png';

function Login() {
  return (
    <div className="app">
      <div className="header">
        <div className="text">WELCOME</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
            <img className='image' src={user} ></img>
            <input className='userInput' type="text" placeholder='Username'></input>
        </div>
        <div className="input">
            <img className='image' src={email} ></img>
            <input className='userInput' type="text" placeholder='Email'></input>
        </div>
        <div className="input">
            <img className='image' src={pass} ></img>
            <input className='userInput' type="text" placeholder='Password'></input>
        </div>
      </div>
    <div className='forgotPass'>Forgot Password ?<span> Click here</span></div>
    <div className='submit' >
      <div className="submit-container">Login</div>
      <div className="submit-container">Sign Up</div>
    </div>
     
    </div>
  );
}

export default Login;
