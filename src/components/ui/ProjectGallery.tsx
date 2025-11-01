import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ProjectGalleryProps {
  images: string[];
  projectName: string;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ 
  images, 
  projectName, 
  isOpen, 
  onClose 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300"
      onClick={handleBackdropClick}
    >
      {/* Modal Container */}
      <div className="relative bg-gray-900/90 border border-cyan-400/30 rounded-xl max-w-4xl max-h-[90vh] w-full overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-cyan-400/20 bg-gray-900/80">
          <h3 className="text-white font-semibold text-lg">
            {projectName} - {currentIndex + 1} / {images.length}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Main Image */}
        <div className="relative flex items-center justify-center p-4">
          <button
            onClick={prevImage}
            className="absolute left-4 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 hover:scale-110 border border-cyan-400/30"
          >
            <FaChevronLeft size={20} />
          </button>

          <div className="flex items-center justify-center max-h-[60vh]">
            <img
              src={images[currentIndex]}
              alt={`${projectName} - Imagen ${currentIndex + 1}`}
              className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-lg"
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 hover:scale-110 border border-cyan-400/30"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Image Indicators */}
        <div className="flex justify-center gap-2 p-4 bg-gray-900/80 border-t border-cyan-400/20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-cyan-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 p-4 bg-gray-900/60 border-t border-cyan-400/10 overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`flex-shrink-0 w-16 h-16 border-2 rounded-lg overflow-hidden transition-all duration-200 ${
                  index === currentIndex 
                    ? 'border-cyan-400 scale-110 shadow-lg shadow-cyan-400/20' 
                    : 'border-gray-600 hover:border-gray-400'
                }`}
              >
                <img
                  src={image}
                  alt={`Miniatura ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;