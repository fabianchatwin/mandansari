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
    Alice: ["RESTAURANT", "BUFFET", "BN", "FLOWERS", "CAKE", "BUBBLES", "MIX"],
    JodanyBram: [], // Add subfolders as needed
    WhatsappPhotos: ["SATURDAY", "SUNDAY"],
    WHATSAPPVIDEOSUNDAY: [],
  };

  const handleClickFolder = (folder: string) => {
    setSelectedFolder(folder);
    setShowSubfolders(
      folderMap[folder] && Object.keys(folderMap[folder]).length > 0,
    );
  };

  const folders = showSubfolders
    ? folderMap[selectedFolder || ""]
    : ["Alice", "JodanyBram", "WhatsappPhotos", "WHATSAPPVIDEOSUNDAY"];
  const buttonLabels = showSubfolders
    ? folderMap[selectedFolder || ""]
    : [
        "OFFICIAL PHOTOS by ALICE DONAGGIO",
        "OFFICIAL VIDEOS by JODANY and BRAM",
        "WHATSAPP GROUP PHOTOS",
        "WHATSAPP GROUP VIDEOS",
      ];

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
      {folders.map((folder, index) => (
        <button
          key={folder}
          className="gallery-open-button title"
          style={{ animationDelay: `${index * 0.1}s` }}
          onClick={() => handleClickFolder(folder)}
        >
          {buttonLabels[index]}
        </button>
      ))}
      <button
        className="gallery-open-button"
        style={{ animationDelay: `${folders.length * 0.1}s` }}
        onClick={goHome}
      >
        {showSubfolders ? "Back" : "Home"}
      </button>
    </div>
  );
}
