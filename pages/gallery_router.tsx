import React from "react";
import { useRouter } from "next/router";
import Gallery from "@components/gallery";
import GalleryList from "@components/galleryList";

export default function GalleryRouter() {
  const router = useRouter();
  const { folder, startIndex, list } = router.query;

  if (list) {
    const listValue = Array.isArray(list) ? parseInt(list[0]) : parseInt(list);
    if (listValue >= 1) {
      return <GalleryList folder={folder as string} />;
    }
  }

  const startIndexValue = startIndex ? parseInt(startIndex as string) : 0;
  return <Gallery folder={folder as string} startIndex={startIndexValue} />;
}
