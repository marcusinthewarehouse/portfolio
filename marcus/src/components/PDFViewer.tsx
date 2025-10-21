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
      <div className="relative bg-white rounded-lg overflow-hidden w-[95vw] h-[95vh] max-w-5xl flex flex-col">
        <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
          <button
            onClick={handleDownload}
            className="p-1.5 text-sm sm:p-2 sm:text-base rounded-lg bg-amber-500 hover:bg-amber-600 text-white transition-colors flex items-center gap-1 sm:gap-2"
          >
            <Download size={16} className="sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Download Resume</span>
            <span className="sm:hidden">Download</span>
          </button>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="flex-1">
          <iframe
            src={`${pdfUrl}#view=FitH`}
            className="w-full h-full border-0"
            title="Resume PDF"
          />
        </div>
      </div>
    </div>
  );
}