import React from 'react';
import Video from '../components/Video/Video';
import Content from '../components/content';
import './LandingPage.css';
function LandingPage() {
  return (
    <div className="landing-page">
      <div className="top-section">
        <Content />
        <Video src="/sample-video1.mp4" />
      </div>
      <div className="bottom-section">
        <div className="video-wrapper">
        <div className="content-bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
          <div className="video-container">
            <Video src="/sample-video2.mp4" />
          </div>
          <div className="content-bottom">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation, ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
          <div className="video-container">
            <Video src="/sample-video3.mp4" />
          </div>
        </div> 
      </div>
    </div>
  );
}

export default LandingPage;