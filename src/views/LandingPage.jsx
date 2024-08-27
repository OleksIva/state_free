import React from "react";
import passportIllustration from "../assets/Passport.jpg";
import loginRegisterIllustration from "../assets/Login_register.png"
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();
  
  return (
    <div className="container-fluid mt-0 g-0 py-1">
    <div className="bg-color landing-page-above">
      <div className="row h-100">
       
        <div className="col-md-4 d-flex align-items-center justify-content-center text-left text-above">
          <div>
            <p className="mb-0">STATEFERR</p>
            <p className="mb-0">CASE</p>
            <p className="mb-0">ASSISTANT</p>
          </div>
        </div>

        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <img
            src={passportIllustration}
            className="passbort-img"
            alt="Passport Illustration"
          />
        </div>

        <div className="col-md-4 d-flex flex-column align-items-center justify-content-center p-4">
          <div >
            A comprehensive tool to guide<br/>
            you through the process of<br/>
            statelessness determination.
          </div>
          <button
            type="submit"
            className="btn-home-above rounded-pill mt-4"
          >
            Start your Application
          </button>
        </div>
      </div>
    </div>
    <div className="row bg-white">
      <div className="col-6 d-flex justify-content-center">
      <img
            src={loginRegisterIllustration}
            className="passbort-img"
            alt="Passport Illustration"
          />
      </div>
      <div className="col-6 mt-5 ">
        <div className="row">
          <div className="col-12 mb-5">
        <h1 className="mb-5">YOUR DIGITAL CASE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni magnam, voluptas aliquam veniam asperiores praesentium corrupti, possimus cupiditate omnis ex deleniti quis commodi sequi nobis quibusdam tenetur totam adipisci optio.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, minus autem eligendi porro sequi hic similique adipisci laborum veniam facilis at commodi quaerat ipsa maxime neque nemo ratione nobis dolorem!

        </p>
        </div>
       
          <div className="col-4 ">
            <button
              type="button"
              className="btn btn-light rounded-pill text-dark border-success btn-home-einlogen"
              onClick={() => navigate("/login")}
            >
              Einloggen
            </button>

        </div>
        <div className="col-4">
        <button
              type="submit"
              className="btn-home-register rounded-pill "
            >
              Registerieren
            </button>
          </div>
        </div>
      </div>

    </div>
    <div className="row">
      <div className="col-12">
        <h1 >TRANSPARENZ</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestias dignissimos animi reprehenderit sapiente dolorum fugiat, quis perspiciatis minus accusamus non aperiam sunt similique! Nisi ea rem beatae laudantium nobis!
        </p>
        <button type="submit">Read more</button>

      </div>

    </div>
    </div>
    
  );
}

export default LandingPage;
