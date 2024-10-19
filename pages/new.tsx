import { useRouter } from 'next/router';
import React, { useState } from "react";
import GalleryList from "@components/galleryList";

const NewPhotosPage = () => {
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


  return (
    <GalleryList folder="NEW" onBack={handleBackToButtons} />
  );
};

export default NewPhotosPage;
