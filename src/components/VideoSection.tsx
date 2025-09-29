import { useState } from "react";
import { Play } from "lucide-react";
import marketingVideo from "@/assets/videos/marketing.mp4"; // import video lokal

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="heading-section mb-4">
            Lihat{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Transformasi Bisnis
            </span>{" "}
            Klien Kami
          </h2>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto">
            Hasil nyata dari strategi digital marketing yang terbukti
          </p>
        </div>

        {/* Video Container */}
        <div className="aspect-video bg-black rounded-xl overflow-hidden relative">
          {/* Video */}
          <video
            src={marketingVideo}
            controls={isPlaying}
            autoPlay={isPlaying}
            className="w-full h-full object-cover"
          />

          {/* Overlay & Play Button */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(true)}
                className="flex flex-col items-center group"
              >
                <div className="bg-primary/90 hover:bg-primary rounded-full p-5 transition-all duration-300 group-hover:scale-110">
                  <Play className="h-8 w-8 text-white" fill="currentColor" />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-white">
                  Cara Meningkatkan Omset menjadi Ratusan Juta Perjualan
                </h3>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
