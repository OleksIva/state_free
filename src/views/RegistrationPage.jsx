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
      className="container registe-page sm-custom-text"  
    >
      <div className="row ">
        <div className="row">
      <div className="col-12  header-titel justify-content-center align-items-center">Enter your information to register</div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group row mb-3">
          <label className="col-md-4 input-label">Benutzername</label>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control input-field"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label className="col-md-4 col-form-label input-label">E-Mail</label>
          <div className="col-md-8">
            <input
              type="email"
              className="form-control input-field"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label className="col-md-4 col-form-label input-label">Kennwort</label>
          <div className="col-md-8">
            <input
              type="password"
              className="form-control input-field"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-4 col-form-label 1h-sm  input-label mb-3">
            Kennwort Wiederholen
          </label>
          <div className="col-md-8">
            <input
              type="password"
              className="form-control input-field"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
        </div>
        <div className="form-group row mb-3 ">
          <label className="col-md-4 col-form-label input-label">Ort</label>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control input-field"
              value={ort}
              onChange={handleOrtChange}
            />
          </div>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="row">
          <div className="col-12 checkbox-two  pt-3">

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label className="form-check-label text-checkbox " htmlFor="defaultCheck1">
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
        </div>
        </div>
        <div className="row">
        <div className=" col-12 d-flex flex-column align-items-end justify-content-center gap-3  py-3 total-buttun-form  ">
          <div className="mb-2 w-50">
            <button
              type="submit"
              className="rounded-pill btn-home-register"
            >
              Registerieren
            </button>
          </div>
          <div className="w-50 col-12">
            <button
              type="button"
              className="btn-home-einlogen rounded-pill"
              onClick={() => navigate("/login")}
            >
              Einloggen
            </button>
          </div>
        </div>
        </div>
      </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
