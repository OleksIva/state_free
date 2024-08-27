import React from "react";
import passportIllustration from "../assets/Passport.jpg";
import loginRegisterIllustration from "../assets/Login_register.png"
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="container-fluid">
    <div className="bg-color landing-page-above g-0 gab-0">
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
            className="btn-matte-home rounded-pill mt-4"
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
        <h1>YOUR DIGITAL CASE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni magnam, voluptas aliquam veniam asperiores praesentium corrupti, possimus cupiditate omnis ex deleniti quis commodi sequi nobis quibusdam tenetur totam adipisci optio.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, minus autem eligendi porro sequi hic similique adipisci laborum veniam facilis at commodi quaerat ipsa maxime neque nemo ratione nobis dolorem!

        </p>
      </div>

    </div>
    </div>
    
  );
}

export default LandingPage;
