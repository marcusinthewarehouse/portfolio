import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryViewerProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export default function GalleryViewer({ images, isOpen, onClose }: GalleryViewerProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedImage !== null) {
          setSelectedImage(null); // Close detail view, go back to grid
        } else {
          onClose(); // Close entire gallery
        }
      }
      if (e.key === 'ArrowLeft' && selectedImage !== null) handlePrevious();
      if (e.key === 'ArrowRight' && selectedImage !== null) handleNext();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, selectedImage]);

  // Reset to grid view when gallery opens
  useEffect(() => {
    if (isOpen) {
      setSelectedImage(null);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={() => {
              if (selectedImage !== null) {
                setSelectedImage(null);
              } else {
                onClose();
              }
            }}
            className="fixed top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {selectedImage === null ? (
            // Grid View
            <div className="container mx-auto px-4 py-20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Photo Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {images.map((img, idx) => (
                  <motion.button
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setSelectedImage(idx)}
                    className="relative aspect-square overflow-hidden rounded-lg bg-gray-800 hover:ring-4 hover:ring-cyan-400 transition-all duration-200 group"
                  >
                    <img
                      src={img}
                      alt={`Gallery image ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          ) : (
            // Detail View
            <div 
              className="fixed inset-0 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image Container */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
              >
                <img
                  src={images[selectedImage]}
                  alt={`Gallery image ${selectedImage + 1}`}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />
              </motion.div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                {selectedImage + 1} / {images.length}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

