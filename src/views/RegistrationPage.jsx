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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    try {
      const response = await registerUser(
        username,
        email,
        password,
        confirmPassword,
        ort
      );
      dispatch(login(response));
      navigate("/profile");
    } catch (error) {
      const errorMessage =
        String(error).split("Error: ")[1] || "Registration failed";
      console.error("Registration failure:", errorMessage);
      setError("Failed to register. " + errorMessage + ". Please try again.");
    }
  };

  return (
    <div
      className="container mt-5 bg-register p-5 sm-custom-text mobile-container"
      style={{ height: "550px", width: "670px" }}
    >
      <div className="h1 fs-5">Enter your information to register</div>

      <form onSubmit={handleSubmit}>
        <div className="form-group row mb-3">
          <label className="col-12 col-md-2 col-form-label input-label">User name</label>
          <div className="col-12 col-md-10">
            <input
              type="text"
              className="form-control input-field"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label className="col-12 col-md-2 col-form-label input-label">Email</label>
          <div className="col-12 col-md-10">
            <input
              type="email"
              className="form-control input-field"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label className="col-12 col-md-2 col-form-label input-label">Password</label>
          <div className="col-12 col-md-10">
            <input
              type="password"
              className="form-control input-field"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-12 col-md-2 col-form-label 1h-sm  input-label">
            Confirm Password
          </label>
          <div className="col-12 col-md-10">
            <input
              type="password"
              className="form-control input-field"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
        </div>
        <div className="form-group row mb-3 input-label">
          <label className="col-12 col-md-2 col-form-label">Ort</label>
          <div className="col-12 col-md-10">
            <input
              type="text"
              className="form-control input-field"
              value={ort}
              onChange={handleOrtChange}
            />
          </div>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label className="form-check-label text-checkbox" htmlFor="defaultCheck1">
            Please read and accept our data{" "}
            <span className="fw-bold text-decoration-underline">
              privacy policy.
            </span>
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck2"
          />
          <label className="form-check-label text-checkbox" htmlFor="defaultCheck2">
            Allow us to save your documents and information based on our data
            privacy.
          </label>
        </div>
        <div className="d-flex flex-column align-items-center gap-2 sm-custom-text pt-5">
          <div className="mb-2 w-50">
            <button
              type="submit"
              className="btn-matte-green rounded-pill w-100"
            >
              Registerieren
            </button>
          </div>
          <div className="w-50">
            <button
              type="button"
              className="btn btn-light rounded-pill w-100 text-dark border-success"
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
