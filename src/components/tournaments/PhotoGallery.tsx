import PhotoGalleryComponent from "@/components/media/PhotoGallery";

interface PhotoGalleryProps {
  year: number;
}

export default function PhotoGallery({ year }: PhotoGalleryProps) {
  return <PhotoGalleryComponent filterYear={year} />;
}
