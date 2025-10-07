import { Download } from 'lucide-react';

interface PDFViewerProps {
  pdfUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function PDFViewer({ 
  pdfUrl, 
  isOpen, 
  onClose
}: PDFViewerProps) {
  if (!isOpen) return null;

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDownload = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={handleBackgroundClick}>
      <div className="relative bg-white rounded-lg overflow-hidden w-[90vw] h-[90vh] flex flex-col">
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          <button
            onClick={handleDownload}
            className="p-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white transition-colors flex items-center gap-2"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="flex-1">
          <iframe
            src={pdfUrl}
            className="w-full h-full border-0"
            title="Resume PDF"
          />
        </div>
      </div>
    </div>
  );
}