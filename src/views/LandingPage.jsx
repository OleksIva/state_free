import React from "react";
import passportIllustration from "../assets/Passport.jpg";
import loginRegisterIllustration from "../assets/Login_register.png";
import { useNavigate } from "react-router-dom";
import loginRegistetIllustrationPoprtraity from "../assets/Login_register illustration - poprtrait.jpg";
import passportIllustrationPortrait from "../assets/Passport illustration - portrait.jpg";
import questionIllustrationPortrait from "../assets/Question illustration - portrait.jpg";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid py-1">
      <div>
        <div className="row landing-page-above">
          <div className="col-md-4 d-flex align-items-center justify-content-center g-0 ">
            <div className="d-flex flex-column text-above">
              <p className="mb-0">STATEFERR</p>
              <p className="mb-0">CASE</p>
              <p className="mb-0">ASSISTANT</p>
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-center g-0">
            <img
              src={passportIllustration}
              className="passbort-img"
              alt="Passport Illustration"
            />
          </div>

          <div className="col-md-4 d-flex flex-column align-items-center justify-content-center p-4 text-left-above ">
            <div>
              A comprehensive tool to guide
              <br />
              you through the process of
              <br />
              statelessness determination.
            </div>
            <button
              type="submit"
              className="btn-home-register rounded-pill mt-4"
            >
              Start your Application
            </button>
          </div>
        </div>
      </div>
      <div className="row bg-white">
        <div className="col-md-6 d-flex  ">
          <img
            src={loginRegisterIllustration}
            className="login-register-illustration"
            alt="Passport Illustration"
          />
        </div>
        <div className="col-md-6 digital-case">
          <div className="row ">
            <div className="col-12 mb-5">
              <h1 className="mb-5">YOUR DIGITAL CASE</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                magnam, voluptas aliquam veniam asperiores praesentium corrupti,
                possimus cupiditate omnis ex deleniti quis commodi sequi nobis
                quibusdam tenetur totam adipisci optio. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Sunt, minus autem eligendi
                porro sequi hic similique adipisci laborum veniam facilis at
                commodi quaerat ipsa maxime neque nemo ratione nobis dolorem!
              </p>
            </div>
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center align-items-center g-0">
                <button
                  type="button"
                  className="rounded-pill border-success btn-home-einlogen"
                  onClick={() => navigate("/login")}
                >
                  Einloggen
                </button>
              </div>
              <div className="col-md-6 g-0 ">
                <button
                  type="button"
                  className="btn-home-register rounded-pill "
                  onClick={() => navigate("/register")}
                >
                  Registerieren
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 home-tranzpranz">
          <h1 className="pb-3 ">TRANSPARENCY</h1>
          <p className="text-tranzpranz">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            molestias dignissimos animi reprehenderit sapiente dolorum fugiat,
            quis perspiciatis minus accusamus non aperiam sunt similique! Nisi
            ea rem beatae laudantium nobis! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vitae repellat dolore est veniam autem
            nisi, fugiat fugit explicabo ea excepturi sapiente dolor dolores!
            Mollitia fuga iure, provident expedita id dolorum.
          </p>
          <div className="col-md-12">
            <Link
              to="/transparenz"
              className=" btn-home-tranzpranz-readme  rounded-pill "
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
      <div className="row m-5 ">
        <div className="col-md-4 my-5 d-flex flex-column align-items-end justify-content-end  g-0">
          <div>
            <img
              src={passportIllustrationPortrait}
              className="img-portrait"
              alt="Passport Illustration"
            />
          </div>
          <p className="text-portrait py-2 d-flex justify-content-center mt-0">
            Step 1: Collect documents
          </p>
        </div>
        <div className="col-md-4 my-5 d-flex flex-column align-items-center justify-content-end g-0">
          <img
            src={loginRegistetIllustrationPoprtraity}
            className="img-portrait"
            alt="Passport Illustration"
          />

          <p className="text-portrait text-center py-2  mt-0">
            Step 2: Create an acccount
          </p>
        </div>
        <div className="col-md-4 my-5 g-0">
          <div className=" d-flex justify-content-start">
            <img
              src={questionIllustrationPortrait}
              className="img-portrait"
              alt="Passport Illustration"
            />
          </div>
          <p className="text-portrait text-center py-2 mt-0">
            Step 3: Fill out the questionary
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
