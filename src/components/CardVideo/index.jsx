import React from "react";
import { Link } from "react-router-dom";

const CardVideo = ({ video, openModal }) => {
  return (
    <div className="cardvideo" onClick={() => openModal(video.id)}>
      <div className="imgvid">
        <img src={video.img} alt="thubnail" />
      </div>
      <div className="descvid">
        <p className="description">{video.description}</p>
      </div>
    </div>
  );
};

export default CardVideo;
