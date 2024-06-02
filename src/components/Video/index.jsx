import React, { useState } from "react";
import data from "../../data/data.json";
import CardVideo from "../CardVideo";
import VideoModal from "../VideoModal";
import "./video.css";

const Video = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState();
  const openModal = (videoId) => {
    setSelectedVideo(videoId);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedVideo("");
    setIsModalOpen(false);
  };
  return (
    <div className="container-video">
      <div className="text-video">
        <h2>TOP FREE</h2>
        <h1>VIDEOS TRAINING FROM TAI</h1>
      </div>
      <div className="gallery-video">
        {data.videos.map((video) => {
          <CardVideo video={video} openModal={openModal} />;
        })}
      </div>
      <VideoModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        videoId={selectedVideo}
      />
    </div>
  );
};

export default Video;
