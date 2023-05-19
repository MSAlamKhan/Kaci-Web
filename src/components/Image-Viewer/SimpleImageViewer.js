import React, { useState } from "react";
import { VscClose } from "react-icons/vsc";
import ImageViewer from "react-simple-image-viewer";

const SimpleImageViewer = ({ images, setIsViewerOpen }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <ImageViewer
      src={images}
      currentIndex={currentImage}
      disableScroll={false}
      closeOnClickOutside={true}
      onClose={closeImageViewer}
      backgroundStyle={{ zIndex: 21, background: "rgba(0, 0, 0, 0.7)" }}
      closeComponent={<VscClose className="text-4xl" />}
    />
  );
};

export default SimpleImageViewer;
