import React, { useState, useEffect } from "react";
import fire from "./fire";
import "./App.css";
import Login from "./Login";
import Pannel from "./Pannel";

const App = () => {

  const [user, setUser] = useState("");
  const [pw, setPw] =  useState("");
  const [pwError, setPwError] =  useState("");
  const [hasAcc, setHasAcc] = useState("");

  const clearInputs = () => {
    setPw("");
  };

  const clearErrors = () => {
    setPwError("");
  };

  const handleLogin = () => {

    clearErrors();
    var adminPw_ref = fire.database().ref("XPARK_CONSTANTS/admin_password/value");

    adminPw_ref.on("value", (snapshot) => {
      if(snapshot.val() == pw) {
        fire.auth().signInWithEmailAndPassword("admin@xpark.com", "admin0")
                    .catch( (err) => {
                      switch(err.code) {
                        case "auth/wrong-password":
                          setPwError(err.message);
                      }
                    });
      } else {
        setPwError("Invalid Password");
      }
                  
    }, (err) => {
      setPwError("The read password where from database failed: " + err.code);
    });
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged( (user)  => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const handleLogout = () => {
    fire.auth().signOut();
  };

  return (
    <div className = "App">

      {user ? (
          <Pannel 
            handleLogout={handleLogout}
          />
      ) : (
          <Login 
            pw={pw} 
            setPw={setPw}
            handleLogin={handleLogin}
            hasAcc={hasAcc}
            setHasAcc={setHasAcc}
            pwError={pwError}
        />
      )}  
    </div>
  );
};

export default App;