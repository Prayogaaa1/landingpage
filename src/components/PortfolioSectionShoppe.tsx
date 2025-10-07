import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import portfolio1 from "@/assets/shoppe/lpshopee.jpg";
import portfolio2 from "@/assets/shoppe/lpsshopeeafter.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Fashion Store",
    description: "Meningkatkan omset & ROAS 10X setiap bulan",
    image: portfolio1,
    category: "Shoppe Ads",
    results: "Omset menjadi 2,6 miliar dalam satu bulan",
  },
  {
    id: 2,
    title: "E-Commerce Fashion Store",
    description: "Meningkatkan omset & ROAS 10X setiap bulan",
    image: portfolio2,
    category: "Shoppe Ads",
    results: "Omset 2,6 miliar dalam satu bulan",
  },
];

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // Auto-slide
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Kunci scroll saat modal terbuka
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="porto"
      className="py-20 bg-gradient-to-b from-background to-secondary/20 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="heading-section mb-4">
            Portfolio{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Shopee Ads
            </span>
          </h2>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto">
            Lihat bagaimana kami membantu business owner meningkatkan omset mereka
            dengan solusi digital yang terbukti efektif.
          </p>
        </div>

        {/* Portfolio Slider */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {portfolioItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <Card className="card-elevated overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                      
                      {/* Image */}
                      <div className="relative group">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4">
                            <Button
                              variant="outline"
                              size="sm"
                              className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-black"
                              onClick={() => {
                                setShowModal(true);
                                setCurrentIndex(index);
                              }}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Lihat Detail
                            </Button>
                          </div>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col justify-center">
                        <h3 className="heading-card mb-4">{item.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                          <div className="text-sm text-primary font-semibold mb-1">
                            HASIL:
                          </div>
                          <div className="text-2xl font-bold text-primary">
                            {item.results}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 border-white/20 hover:bg-white z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 border-white/20 hover:bg-white z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Paragraf Detail */}
        <div className="mt-10 text-muted-foreground space-y-6">
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <span className="font-semibold text-black">Permintaan:</span>{" "}
              Brand fashion ini menjual produk daster dengan target mencapai
              ROAS 10X setiap bulan, dengan fokus pada peningkatan pendapatan
              melalui optimasi anggaran iklan.
            </li>

            <li>
              <span className="font-semibold text-black">Aktivasi:</span>{" "}
              Kami menerapkan strategi aktivasi branding dan pemasaran kreatif
              untuk menarik perhatian audiens secara lebih efektif di platform marketplace.
            </li>

            <li>
              <span className="font-semibold text-black">Strategi Marketing:</span>{" "}
              Kami melaksanakan strategi branding yang memadukan konsep{" "}
              <strong>User Generated Content (UGC)</strong> dan{" "}
              <strong>konten evergreen</strong> untuk membangun kepercayaan serta
              keterlibatan audiens secara berkelanjutan. Pendekatan ini diperkuat
              dengan kampanye viral yang mengikuti tren terkini, serta pembaruan
              tampilan marketplace — mulai dari optimasi kata kunci hingga
              penyegaran desain banner — guna memperkuat citra brand dan
              meningkatkan konversi penjualan.
            </li>

            <li>
              <span className="font-semibold text-black">Hasil:</span>{" "}
              Dalam tiga tahun kolaborasi, omzet berhasil meningkat hingga{" "}
              <strong>Rp 2,6 miliar per bulan</strong> sejak transisi merek
              dari B2B ke B2C, dengan hasil iklan mencapai lebih dari{" "}
              <strong>32,33 kali lipat ROAS</strong>.
            </li>
          </ul>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-5xl w-full relative overflow-hidden p-6 animate-fade-in">
            {/* Tombol Close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Konten Modal */}
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold mb-2">
                {portfolioItems[currentIndex].title}
              </h3>
              <p className="text-muted-foreground">
                {portfolioItems[currentIndex].description}
              </p>
            </div>

            {/* Gambar */}
            <img
              src={portfolioItems[currentIndex].image}
              alt={portfolioItems[currentIndex].title}
              className="rounded-lg w-full max-h-[70vh] object-contain mb-6"
            />

            {/* CTA */}
            <div className="flex justify-center gap-4">
              <Button
                variant="default"
                onClick={() => setShowModal(false)}
                className="px-6 py-2 text-base"
              >
                Tutup Gambar
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setShowModal(false);
                  document
                    .getElementById("consultation-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Mulai Project Sekarang
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
