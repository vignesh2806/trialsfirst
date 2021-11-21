import ReactPlayer from "react-player";
function Video() {
  return (
    <div className="mt-5 mb-5">
      <ReactPlayer
        className="videoFrame"
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        light={true}
        playing
        controls
        width="580px"
      />
    </div>
  );
}
export default Video;
