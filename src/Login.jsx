import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import logo from './assets/Group-3.svg'
import "./Login.css"

function Login() {
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="LoginDiv">
        <img src={logo} alt="" className="logo" />
        
        <button onClick={loginWithGoogle}>
        Sign in with Google
        </button>
    </div>
  );
}

export default Login;
