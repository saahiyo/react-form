import React from "react";
import { TbEye, TbEyeClosed } from "react-icons/tb";

const Form = () => {

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const formhandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="form-container">
      <h2 className="heading">Join us today</h2>
      <p className="sub-heading">
        sign-up today and unlock access to a world of exciting features and
        content.
      </p>
      <form className="form" onSubmit={(e) => {
          formhandler(e);
      }}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          id="username"
          className="form-control"
          placeholder="Username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="form-control"
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <TbEye className="eye-icon" onClick={togglePasswordVisibility} />
          ) : (
            <TbEyeClosed className="eye-icon" onClick={togglePasswordVisibility} />
          )}
        </div>
        <label>Confirm Password</label>
        <div className="password-input-container">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="c-password"
            className="form-control"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
         {
            showConfirmPassword ? (
            <TbEye className="eye-icon" onClick={toggleConfirmPasswordVisibility} />
          ) : (
            <TbEyeClosed className="eye-icon" onClick={toggleConfirmPasswordVisibility} />
          )
         }
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;