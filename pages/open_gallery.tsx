import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Gallery from "@components/gallery";

export default function Intro() {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  const goGalleryList = (folder: string) => {
    router.push(`/gallery_router?folder=${folder}&list=1`);
  };

  return (
    <div className="gallery-list-container">
      <button
        className="gallery-list-button"
        style={{ animationDelay: "0s" }}
        onClick={() => goGalleryList("Folder1")}
      >
        Button 1
      </button>
      <button
        className="gallery-list-button"
        style={{ animationDelay: "0.1s" }}
        onClick={() => goGalleryList("samples")}
      >
        samples
      </button>
      <button
        className="gallery-list-button"
        style={{ animationDelay: "0.2s" }}
        onClick={() => goGalleryList("WEDDING")}
      >
        WEDDING
      </button>
      <button
        className="gallery-list-button"
        style={{ animationDelay: "0.3s" }}
        onClick={goHome}
      >
        Home
      </button>
    </div>
  );
}
