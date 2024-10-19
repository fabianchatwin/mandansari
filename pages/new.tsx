import { useRouter } from 'next/router';
import GalleryList from "@components/galleryList";

const NewPhotosPage = () => {
  const router = useRouter();

  const handleBackToButtons = () => {
    router.push("/gallery");
  };

  return (
    <GalleryList folder="NEW" onBack={handleBackToButtons} />
  );
};

export default NewPhotosPage;
