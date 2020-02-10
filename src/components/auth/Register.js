// Added by Adi
import React, { useRef } from "react";
// import "./Login.css";

const Register = props => {
  const userName = useRef();
  const email = useRef();
  const password = useRef();
  const verifyPassword = useRef();

  const existingUserCheck = () => {
    return fetch(`http://localhost:8088/users?userEmail=${email.current.value}`)
      .then(_ => _.json())
      .then(user => {
        if (user.length) {
          return true;
        }
        return false;
      });
  };

  const handleRegister = e => {
    e.preventDefault();

    if (password.current.value === verifyPassword.current.value) {
      existingUserCheck().then(() => {
        fetch("http://localhost:8088/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userEmail: email.current.value,
            userPassword: password.current.value,
            userName: userName.current.value
          })
        })
          .then(_ => _.json())
          .then(createdUser => {
            if (createdUser.hasOwnProperty("id")) {
              localStorage.setItem("dognasium_user", createdUser.id);
              props.history.push("/home");
            }
          });
      });
    } else {
      window.alert("Passwords do not match");
    }
  };

  return (
    <main style={{ textAlign: "center" }}>
      <form className="form--login" onSubmit={handleRegister}>
        <h3 className="h3 mb-3 font-weight-normal"
        id="registerTitle"><span className="registerSpan">
          Please Register for</span><br/>
         <span className="registerHeader">D O G <br/>N A S I U M</span>  
        </h3>
        <fieldset>
          <label className="logReg" htmlFor="userName"> Username </label><br/>
          <input
            id="userNameRegister"
            ref={userName}
            type="text"
            name="userName"
            className="form-control"
            placeholder="Username"
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <label  className="logReg" htmlFor="inputEmail"> Email address </label><br/>
          <input
            id="userEmailRegister"
            ref={email}
            type="email"
            name="email"
            className="form-control"
            placeholder="Email address"
            required
          />
        </fieldset>
        <fieldset>
          <label className="logReg" htmlFor="inputPassword"> Password </label><br/>
          <input
            id="userPasswordRegister"
            ref={password}
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </fieldset>
        <fieldset>
          <label className="logReg" htmlFor="verifyPassword"> Verify Password </label><br/>
          <input
            id="userPasswordRegister"
            ref={verifyPassword}
            type="password"
            name="verifyPassword"
            className="form-control"
            placeholder="Verify password"
            required
          />
        </fieldset>
        <fieldset>
          <button type="submit">Sign in</button>
        </fieldset>
      </form>
    </main>
  );
};

export default Register;
