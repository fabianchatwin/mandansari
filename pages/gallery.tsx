import React, { useState } from "react";
import { useRouter } from "next/router";
import GalleryList from "@components/galleryList";
import VideoPlayer from "@components/videoplayer";

export default function Intro() {
  const router = useRouter();
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  const goHome = () => {
    router.push("/");
  };

  const handleBackToButtons = () => {
    setSelectedFolder(null);
  };

  const folders = ["Folder1", "samples", "WEDDING", "TRUPIA"]; // Add more folders as needed

  if (selectedFolder) {
    return <GalleryList folder={selectedFolder} onBack={handleBackToButtons} />;
  }

  return (
    <div className="gallery-list-container">
      <div className="gallery-open-button">
        <VideoPlayer videoId="PCPPEn2EGh4" />
      </div>
      {folders.map((folder, index) => (
        <button
          key={folder}
          className="gallery-open-button"
          style={{ animationDelay: `${index * 0.1}s` }}
          onClick={() => setSelectedFolder(folder)}
        >
          {folder}
        </button>
      ))}
      <button
        className="gallery-open-button"
        style={{ animationDelay: `${folders.length * 0.1}s` }}
        onClick={goHome}
      >
        Home
      </button>
    </div>
  );
}
