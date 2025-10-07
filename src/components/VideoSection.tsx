import { useState } from "react";
import { Play } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // ID video YouTube (ambil dari URL: https://youtu.be/RgYA93vSTXI)
  const videoId = "RgYA93vSTXI";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

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
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl bg-black">
          {!isPlaying ? (
            <>
              {/* Thumbnail Preview */}
              <img
                src={thumbnailUrl}
                alt="Video Thumbnail"
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Overlay + Tombol Play */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="flex flex-col items-center group"
                >
                  <div className="bg-primary/90 hover:bg-primary rounded-full p-5 transition-all duration-300 group-hover:scale-110">
                    <Play className="h-8 w-8 text-white" fill="currentColor" />
                  </div>
                  <h3 className="text-lg font-semibold mt-4 text-white text-center px-4 max-w-sm">
                    Cara Meningkatkan Omset menjadi Ratusan Juta Penjualan
                  </h3>
                </button>
              </div>
            </>
          ) : (
            <iframe
              src={youtubeEmbedUrl}
              title="Video Marketing"
              allow="autoplay; fullscreen; encrypted-media"
              allowFullScreen
              frameBorder="0"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
