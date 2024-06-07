import React, { useState } from "react";
import { useRouter } from "next/router";
import GalleryList from "@components/galleryList";
import VideoPlayer from "@components/videoplayer";

export default function Intro() {
  const router = useRouter();
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [showSubfolders, setShowSubfolders] = useState(false);

  const goHome = () => {
    if (showSubfolders) {
      setSelectedFolder(null);
      setShowSubfolders(false);
    } else {
      router.push("/");
    }
  };

  const handleBackToButtons = () => {
    setSelectedFolder(null);
    setShowSubfolders(false);
  };

  const folderMap = {
    Alice: {
      subfolders: [
        "RESTAURANT",
        "BUFFET",
        "BN",
        "FLOWERS",
        "CAKE",
        "BUBBLES",
        "MIX",
      ],
      customLabels: [
        "RESTAURANT",
        "BUFFET",
        "BLACK AND WHITE",
        "FLOWERS",
        "CAKE",
        "BUBBLES",
        "MIX",
      ],
    },
    ALLVIDEOS: {
      subfolders: [],
      customLabels: [],
    },
    WhatsappPhotos: {
      subfolders: ["WHATSAPPPHOTOSATURDAY", "WHATSAPPPHOTOSSUNDAY"],
      customLabels: ["Whatsapp Photos Saturday", "Whatsapp Photos Sunday"],
    },
    WHATSAPPVIDEOS: {
      subfolders: ["WHATSAPPVIDEOSATURDAY", "WHATSAPPVIDEOSUNDAY"],
      customLabels: ["Whatsapp Videos Saturday", "Whatsapp Videos Sunday"],
    },
  };

  const handleClickFolder = (folder: string) => {
    if (folderMap[folder]?.subfolders?.length > 0) {
      setSelectedFolder(folder);
      setShowSubfolders(true);
    } else {
      setSelectedFolder(folder);
      setShowSubfolders(false);
    }
  };

  const renderFolders = showSubfolders
    ? folderMap[selectedFolder || ""]?.subfolders
    : ["Alice", "ALLVIDEOS", "WhatsappPhotos", "WHATSAPPVIDEOS"];
    
  const buttonLabels = showSubfolders
    ? folderMap[selectedFolder || ""]?.customLabels
    : [
        "Official Photos",
        "Official Videos",
        "Contributed Photos",
        "Contributed Videos",
      ];

  if (selectedFolder && !showSubfolders) {
    return <GalleryList folder={selectedFolder} onBack={handleBackToButtons} />;
  }

  return (
    <div className="gallery-list-container">
      {!showSubfolders && (
        <div className="gallery-open-button  video-container">
          {/*<VideoPlayer videoId="PCPPEn2EGh4" /> // youtube video */}
          <video
            src="https://fafalala.org/LIAFABIAN2024-10000.mp4"
            controls
            autoPlay
            muted
            className="gallery-open-video"
          />
        </div>
      )}
      {renderFolders.map((folder, index) => (
        <button
          key={folder}
          className="gallery-open-button title"
          style={{ animationDelay: `${index * 0.1}s` }}
          onClick={() => handleClickFolder(folder)}
        >
          {buttonLabels ? buttonLabels[index] : folder}
        </button>
      ))}
      <button
        className="gallery-open-button"
        style={{ animationDelay: `${renderFolders.length * 0.1}s` }}
        onClick={goHome}
      >
        {showSubfolders ? "Back" : "Home"}
      </button>
    </div>
  );
}
