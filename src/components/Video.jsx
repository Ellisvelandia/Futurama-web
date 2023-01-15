const src = "https://www.youtube.com/embed/PP_gho2e4Jk";
const Video = () => {
  return (
    <iframe
      width="100%"
      height="100%"
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default Video;
