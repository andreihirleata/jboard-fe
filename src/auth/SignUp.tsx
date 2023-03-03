import { Button } from "flowbite-react";
import { useState } from "react";
import { auth } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm,setPasswordConfirm] = useState("");
  const [httpError, setHttpError] = useState("");

  const signUp = (e: any) => {
    e.preventDefault();
    if(password === passwordConfirm) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
      setHttpError(handleLoginError(error))
      console.log(error.code)});
    } else {
      setHttpError("Password do not match.");
    }
  };

  const handleLoginError = (err: any) => {
    switch(err.code) {
      case "auth/email-already-exists" : return "Email already in use. Please log in or reset your password."
      case "auth/invalid-email" : return "Please provide a valid email address."
      case "auth/weak-password" : return "Your password must be at least six characters long."
      case "auth/missing-email" : return "Please enter a valid email address."
      default : return err.code;
    }
     
  }

  return (
    <div className="sign-up-container flex no-scroll-div  m-auto">
      <form
        onSubmit={signUp}
        className="flex flex-col w-64 m-auto"
        autoComplete="chrome-off"
      >
        <h1>Create account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-[10px]"
          autoComplete="chrome-off"
        />
        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-[10px]"
          autoComplete="chrome-off"
        />
        <input
          type="password"
          placeholder="Confirm your password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className="mb-[30px]"
          autoComplete="chrome-off"
        />
        <Button type="submit">Sign up</Button>
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

export default SignUp;
