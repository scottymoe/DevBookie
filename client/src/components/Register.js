import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormInput } from "../customHooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";

const Register = (props) => {
  const email = useFormInput("", "Email");
  const password = useFormInput("", "Password");
  const passwordConfirmation = useFormInput("", "Password Confirmation");

  const { handleRegister, authLoading, authErrors } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.value !== passwordConfirmation.value) {
      alert("passwords do not match");
    } else {
      handleRegister(
        {
          email: email.value,
          password: password.value,
        },
        history
      );
    }
  };
  // if (authLoading) {
  //   return (
  //     <>
  //       <p>loading</p>
  //     </>
  //   );
  // }

  return (
    <div>
      {authErrors && (
        <>
          {authErrors.map((err) => (
            <p>{err}</p>
          ))}
        </>
      )}

      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <p>{email.label}</p>
        <input autoFocus {...email} />
        <p>{password.label}</p>
        <input type="password" {...password} />
        <p>{passwordConfirmation.label}</p>
        <input type="password" {...passwordConfirmation} />
        {authLoading ? (
          <button disabled> spinner goes here</button>
        ) : (
          <button type="submit">register</button>
        )}
      </form>
    </div>
  );
};

export default Register;
