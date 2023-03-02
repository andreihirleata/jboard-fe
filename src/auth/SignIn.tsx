import { Button } from "flowbite-react";
import { useState } from "react";
import { auth } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [httpError, setHttpError] = useState(null);

  let history = useHistory();

  function homeRedirect() {
    history.push("/");
  }

  const signIn = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .then(() => homeRedirect())
      .catch((error) => setHttpError(error.code));
  };

  //TODO - Add user friendly message on failed login

  return (
    <div className="sign-in-container flex no-scroll-div  m-auto">
      <form onSubmit={signIn} className="flex flex-col w-64 m-auto">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-[10px]"
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-[10px]"
        />
        <Button type="submit">Log In</Button>
        {httpError ? (
          <div className="mt-5 bg-red-500 rounded-md">
            <p className="m-3 font-medium">{httpError}</p>
          </div>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
};

export default SignIn;
