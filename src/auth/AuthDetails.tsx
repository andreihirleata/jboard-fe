import { useEffect, useState } from "react";
import { auth } from "../FirebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Button } from "flowbite-react";
import { User as FirebaseUser } from "firebase/auth";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  });

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log("sign out successful"))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      {authUser ? <div><p>{`Signed in as ${authUser.email}`}</p> <Button onClick={userSignOut}>Sign out</Button> </div>: <p>Signed Out</p>}
      
    </div>
  );
};

export default AuthDetails;
