import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import portfolio1 from "@/assets/meta/metonglp.jpg";
import portfolio2 from "@/assets/meta/lpmetonhhh.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Fashion Store (Before)",
    description: "Permintaan Meningkatkan Roas",
    image: portfolio2,
    category: "Meta Ads",
    results: "Omset & ROAS Meningkat "
  },
  {
    id: 2,
    title: "E-Commerce Fashion Store (After)",
    description: "Platform B2B dengan user experience yang seamless dan conversion rate tinggi",
    image: portfolio1,
    category: "Meta Ads",
    results: " ROAS lebih dari 6,93 kali lipat."
  },

];

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // Auto-slide every 7 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="porto" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">
            Portfolio{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Meta Ads
            </span>
          </h2>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto">
            Lihat bagaimana kami telah membantu business owner meningkatkan omset mereka dengan solusi digital yang terbukti efektif.
          </p>
        </div>

        {/* Portfolio Slider */}
        <div className="relative">
          
          {/* Main Portfolio Display */}
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
                                setCurrentIndex(index);
                                setShowModal(true);
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
                        
                        {/* Results */}
                        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                          <div className="text-sm text-primary font-semibold mb-1">HASIL:</div>
                          <div className="text-2xl font-bold text-primary">{item.results}</div>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 border-white/20 hover:bg-white z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 border-white/20 hover:bg-white z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          {isAutoPlaying && (
            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs text-muted-foreground">Auto</span>
              </div>
            </div>
          )}
        </div>

        {/* paragraf */}
        <div className="mt-8 space-y-4 text-muted-foreground">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <span className="font-semibold text-black">Permintaan :</span>  
              <p>
                Merek fashion ini menjual produk pakaian dengan harapan mencapai ROAS sebesar 5X setiap bulannya.
              </p>
            </li>
            <li>
              <span className="font-semibold text-black">Aktivasi :</span>  
              <p>
                Kami menawarkan strategi seperti aktivasi merek dan 
                pemasaran secara berkala di marketplace untuk menarik perhatian audiens dengan lebih efektif.
              </p>
            </li>
            <li>
              <span className="font-semibold text-black">Strategi Marketing :</span>  
              <p>
                Kami menerapkan strategi branding yang berfokus pada User Generated Content (UGC) dan pembuatan konten yang 
                relevan dengan audiens, diperkuat melalui peluncuran kampanye viral serta pemanfaatan tren terkini untuk memperluas 
                jangkauan dan meningkatkan engagement. Selain itu, kami juga melakukan optimasi marketplace dengan memperbarui kata kunci
                 dan desain banner guna memperkuat citra brand sekaligus mendorong peningkatan konversi secara signifikan.
              </p>
            </li>
            <li>
              <span className="font-semibold text-black">Hasil :</span>
              <p>
                Selama tiga tahun bekerja sama, kami berhasil meningkatkan omzet hingga 77% dalam enam bulan, 
                dengan hasil iklan mencapai ROAS lebih dari 6,93 kali lipat.
              </p>
          </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ingin melihat bisnis Anda jadi success story berikutnya?
          </p>
          <Button 
            className="btn-hero"
            onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Mulai Project Sekarang
          </Button>
        </div>
      </div>

      {/* Modal Fullscreen */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative max-w-5xl w-full p-4">
            {/* Tombol Close */}
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/40"
              onClick={() => setShowModal(false)}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Tombol Prev */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Gambar */}
            <img
              src={portfolioItems[currentIndex].image}
              alt={portfolioItems[currentIndex].title}
              className="w-full h-auto rounded-lg shadow-lg"
            />

            {/* Tombol Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
