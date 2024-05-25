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
    JodanyBram: {
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
    setSelectedFolder(folder);
    setShowSubfolders(
      folderMap[folder] && folderMap[folder].subfolders.length > 0,
    );
  };

  const renderFolders = showSubfolders
    ? folderMap[selectedFolder || ""]?.subfolders
    : ["Alice", "JodanyBram", "WhatsappPhotos", "WHATSAPPVIDEOS"];
  const buttonLabels = showSubfolders
    ? folderMap[selectedFolder || ""]?.customLabels
    : [
        "OFFICIAL PHOTOS by ALICE DONAGGIO",
        "OFFICIAL VIDEOS by JODANY and BRAM",
        "WHATSAPP GROUP PHOTOS",
        "WHATSAPP GROUP VIDEOS",
      ];
  console.log("HHHH " + selectedFolder + " " + showSubfolders);
  if (selectedFolder && !showSubfolders) {
    return <GalleryList folder={selectedFolder} onBack={handleBackToButtons} />;
  }

  return (
    <div className="gallery-list-container">
      {!showSubfolders && (
        <div className="gallery-open-button black-button">
          <VideoPlayer videoId="PCPPEn2EGh4" />
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
