import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Api/api"; 
import { login } from "../store/userSlice"; 
import "./LoginPage.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await loginUser(email, password);
      dispatch(login(response));
      navigate("/"); 
    } catch (error) {
      const errorMsg = String(error).split("Error: ")[1] || "An unknown error occurred";
      console.error("Login failure:", errorMsg);
      setError("Failed to login. " + errorMsg + ". Please try again.");
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="container login-page-neu">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <p className="text-title-login">Melden Sie sich bei Ihrem Konto an</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="input-email"
              placeholder="E-Mail"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="input-password"
              placeholder="Password"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="form-check col-6">
            <input
              className="form-check-input"
              type="checkbox"
              id="defaultCheck1"
            />
            <label className="text-checkbox" htmlFor="defaultCheck1">
              Eingeloggt bleiben
            </label>
          </div>
          <div className="col-6">
            <p className="forgot-password" onClick={handleForgotPassword}>
              Passwort vergessen?
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="w-50 col-12">
              {error && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="btn-home-einlogen-login rounded-pill"
              >
                Einloggen
              </button>
            </div>
            <div className="text-register-loinpage">
              Haben Sie noch kein Konto?
            </div>
            <button
              type="button"
              className="rounded-pill btn-home-register-loinpage"
              onClick={() => navigate("/register")}
            >
              Registerieren
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;