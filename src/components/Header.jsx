import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/assignment">Assignment</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;
<div className="row home-tranzpranz p-5">
<div className="col-12">
  <h1 className="pb-3 ">TRANSPARENZ</h1>
  <p className="font-weight-bold">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
    molestias dignissimos animi reprehenderit sapiente dolorum fugiat,
    quis perspiciatis minus accusamus non aperiam sunt similique! Nisi
    ea rem beatae laudantium nobis! Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Vitae repellat dolore est veniam autem
    nisi, fugiat fugit explicabo ea excepturi sapiente dolor dolores!
    Mollitia fuga iure, provident expedita id dolorum.
  </p>
  <button type="submit" className="btn-home-tranzpranz rounded-pill">
    Read more
  </button>
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
  <p className="text-portrait text-center py-2 d-flex ">
    Step 3: Fill out the questionary
  </p>
</div>
<div className="col-md-4 my-5 d-flex flex-column align-items-center justify-content-end g-0">
  <div>
    <img
      src={loginRegistetIllustrationPoprtraity}
      className="img-portrait"
      alt="Passport Illustration"
    />
  </div>
  <p className="text-portrait text-center py-2">
    Step 3: Fill out the questionary
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
  <p className="text-portrait text-center py-2">
    Step 3: Fill out the questionary
  </p>
</div>