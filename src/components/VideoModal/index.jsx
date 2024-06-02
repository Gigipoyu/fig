import Modal from "react-modal";

const VideoModal = ({ isOpen, onRequestClose, videoId }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
      <div className="modal-content">
        <button onClick={onRequestClose}>Fermer </button>
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            className="ivideo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
          ></iframe>
        </div>
      </div>
    </Modal>
  );
};

export default VideoModal;
