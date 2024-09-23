import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Api/api";
import { login } from "../store/userSlice";
import "./RegistrationPage.css";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [ort, setOrt] = useState("");
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
    ort: false,
  });

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setError("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  const handleOrtChange = (event) => {
    setOrt(event.target.value);
    setError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setError("");
  };

  const validatePassword = (password) => {
    const errors = [];
    
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter");
    }
    if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one digit");
    }
    if (!/[@$!%*?&#]/.test(password)) {
      errors.push("Password must contain at least one special character");
    }
    
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let errors = {
      username: !username,
      email: !email,
      password: !password,
      confirmPassword: !confirmPassword,
      ort: !ort,
    };

    setValidationErrors(errors);

    if (Object.values(errors).some((error) => error)) {
      setError("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      setError(passwordErrors.join(", "));
      return;
    }

    try {
      const response = await registerUser(username, email, password, ort);
      dispatch(login(response));
      navigate("/login");
    } catch (error) {
      if (error.message) {
        setError(error.message);
      } else if (error.response) {
        const errorDetail = await error.response.json();
        setError(errorDetail.detail || "An unknown error occurred.");
      } else {
        setError("An unknown error occurred.");
      }
      console.error("Registration failure:", error);
    }
  };

  return (
    <div
      className={`container registe-page  ${error ? "error-bg" : ""}` }
    >
      <div className="row">
        <div className="col-12 header-titel">
          Registrieren Sie sich hier
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group row mb-3">
          <label className="col-md-4 input-label">Benutzername</label>
          <div className="col-md-8">
            <input
              type="text"
              className={`form-control input-field ${
                validationErrors.username ? "input-error" : ""
              }`}
              value={username}
              onChange={handleUsernameChange}
              placeholder="Benutzername"
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label className="col-md-4 input-label">E-Mail</label>
          <div className="col-md-8">
            <input
              type="email"
              className={`form-control input-field ${
                validationErrors.email ? "input-error" : ""
              }`}
              value={email}
              onChange={handleEmailChange}
              placeholder="E-Mail"
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label className="col-md-4 input-label">Kennwort</label>
          <div className="col-md-8">
            <input
              type="password"
              className={`form-control input-field ${
                validationErrors.password ? "input-error" : ""
              }`}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Kennwort"
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label className="col-md-4 input-label">Kennwort wiederholen</label>
          <div className="col-md-8">
            <input
              type="password"
              className={`form-control input-field ${
                validationErrors.confirmPassword ? "input-error" : ""
              }`}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Kennwort wiederholen"
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label className="col-md-4 input-label">Ort</label>
          <div className="col-md-8">
            <input
              type="text"
              className={`form-control input-field ${
                validationErrors.ort ? "input-error" : ""
              }`}
              value={ort}
              onChange={handleOrtChange}
              placeholder="Ort"
            />
          </div>
        </div>

        {error && (
          <div className="error-message">
            <i className="fas fa-exclamation-circle"></i>
            {error}
          </div>
        )}

        <div className="row">
          <div className="col-12 d-flex flex-column align-items-end justify-content-center gap-3 py-3 total-buttun-form">
            <button type="submit" className="rounded-pill btn-home-register">
              Registrieren
            </button>
            <button
              type="button"
              className="btn-home-einlogen rounded-pill"
              onClick={() => navigate("/login")}
            >
              Einloggen
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
