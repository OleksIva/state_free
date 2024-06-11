
function Video({ src }) {
  return (
    <div className="video-container">
      <video controls className="landing-video">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;