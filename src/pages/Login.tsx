import React, { FormEvent, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface ErrorState {
  email?: boolean;
  password?: boolean;
  msg: string;
}

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<ErrorState[]>([]);
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  );
  // const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      localStorage.setItem("authToken", "your-token");
      location.reload();
      // navigate("/");
    } else {
      setErrors((prev: ErrorState[]) => {
        const newErrors: ErrorState[] = [];

        if (username !== "admin") {
          newErrors.push({
            email: true,
            msg: "Invalid Email",
          });
        }

        if (password !== "password") {
          newErrors.push({
            password: true,
            msg: "Invalid Password",
          });
        }

        return [...prev, ...newErrors];
      });
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = e.target.value;
    setUsername(newUsername);

    // Remove the email error if it exists and the user starts typing
    setErrors((prev) => prev.filter((error) => !error.email));
  };

  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

    // Remove the email error if it exists and the user starts typing
    setErrors((prev) => prev.filter((error) => !error.password));
  };

  // Find the email error object
  const emailError = errors.find((error) => error.email);
  const passError = errors.find((error) => error.password);
  return (
    <div className="login-wrp">
      <div className="login">
        <div className="login-top">
          <div className="brand">
            <img src="images/logo.png" alt="" />
          </div>
        </div>
        <form className="form" onSubmit={(e) => handleLogin(e)}>
          <div className={`input-group ${emailError ? "error" : ""}`}>
            <label htmlFor="email">Email or Username</label>
            <input
              id="email"
              type="text"
              placeholder="Email or Username"
              value={username}
              onChange={handleUsernameChange}
            />
            {emailError && <span className="error-msg">{emailError.msg}</span>}
          </div>
          <div className={`input-group ${emailError ? "error" : ""}`}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type={passwordType}
              placeholder="Password"
              value={password}
              onChange={handlePassChange}
            />
            {passError && <span className="error-msg">{passError.msg}</span>}
            <button
              className="icon"
              type="button"
              onClick={() => {
                setPasswordType((prevType) =>
                  prevType === "password" ? "text" : "password"
                );
              }}
            >
              {passwordType === "password" ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>
          <Link className="forget-pass-btn" to="/">
            Forgot Password?
          </Link>
          <div className="input-group">
            <button className="btn" type="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
