import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import GalleryList from "@components/galleryList";
import VideoPlayer from "@components/videoplayer";

export default function Intro() {
  const router = useRouter();
  const { selectedFolder: querySelectedFolder, showSubfolders: queryShowSubfolders } = router.query;

  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [showSubfolders, setShowSubfolders] = useState(false);

  // Update state based on URL parameters when the page loads or parameters change
  useEffect(() => {
    if (querySelectedFolder) {
      setSelectedFolder(querySelectedFolder as string);
    }
    if (queryShowSubfolders) {
      setShowSubfolders(queryShowSubfolders === "true");
    }
  }, [querySelectedFolder, queryShowSubfolders]);

  const goHome = () => {
    if (showSubfolders) {
      setSelectedFolder(null);
      setShowSubfolders(false);
      router.push("/gallery", undefined, { shallow: true });
    } else {
      router.push("/");
    }
  };

  const handleBackToButtons = () => {
    setSelectedFolder(null);
    setShowSubfolders(false);
    router.push("/gallery", undefined, { shallow: true });
  };

  const folderMap = {
    GRANGUARDIA: {
      subfolders: [],
      customLabels: [],
    },
    RESTAURANT: {
      subfolders: [
        "BUFFETPARTY",
        "DINNER",
        "GROUPS",
        "KIDS",
        "LIAFABIAN",
      ],
      customLabels: [
        "Buffet",
        "Dinner",
        "Groups",
        "Kids",
        "Lia & Fabian",
      ],
    },
    OFFICIALVIDEOS: {
      subfolders: [],
      customLabels: [],
    },
    WHATSAPP: {
      subfolders: ["NEW", "WHATSAPPPHOTOSATURDAY","WHATSAPPVIDEOSATURDAY", "SUNDAY","WHATSAPPVIDEOSUNDAY"],
      customLabels: ["✨New Photos✨","Saturday Photos", "Saturday Videos", "Sunday Photos", "Sunday Videos"],
    },
  };

  const handleClickFolder = (folder: string) => {
    if (folderMap[folder]?.subfolders?.length > 0) {
      setSelectedFolder(folder);
      setShowSubfolders(true);
      router.push({
        pathname: "/gallery",
        query: { selectedFolder: folder, showSubfolders: true },
      }, undefined, { shallow: true });
    } else {
      setSelectedFolder(folder);
      setShowSubfolders(false);
      router.push({
        pathname: "/gallery",
        query: { selectedFolder: folder, showSubfolders: false },
      }, undefined, { shallow: true });
    }
  };

  const renderFolders = showSubfolders
    ? folderMap[selectedFolder || ""]?.subfolders
    : ["GRANGUARDIA", "RESTAURANT", "OFFICIALVIDEOS", "WHATSAPP"];
    
  const buttonLabels = showSubfolders
    ? folderMap[selectedFolder || ""]?.customLabels
    : [
        "Gran Guardia",
        "Restaurant",
        "Official Videos",
        "Contributions",
      ];

  if (selectedFolder && !showSubfolders) {
    return <GalleryList folder={selectedFolder} onBack={handleBackToButtons} />;
  }

  return (
    <div className="container">
      <div className="gallery-list-container">
        {!showSubfolders && (
          <button className="gallery-open-button video-container">
            {/*<VideoPlayer videoId="PCPPEn2EGh4" /> // youtube video */}
            <div className="gallery-button-left"></div>
            <div className="gallery-button-right"> </div>
            <video
              src="https://media.fafalala.org/LIAFABIAN2024-10000.mp4"
              controls
              autoPlay
              muted
              className="gallery-open-video"
            />
          </button>
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
    </div>
  );
}
