import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import portfolio1 from "@/assets/tiktok/1.png";
import portfolio2 from "@/assets/tiktok/2.png";
import portfolio3 from "@/assets/tiktok/3.png";
import portofolio4 from "@/assets/tiktok/4.png";


const portfolioItems = [
  {
    id: 1,
    title: "Fashion Brand",
    description: "Meningkatkan pendapatan hingga 6,5x lipat dan ROI naik dari 4,41 ke 46,06 hanya dalam 3 bulan melalui strategi TikTok Ads GMV Max",
    image: portfolio1,
    category: "Tiktok Ads",
    results: "Pendapatan naik 6,5x lipat"
  },
  {
    id: 2,
    title: "Agriculture ",
    description: "Dalam 1 bulan, Agriculture Brand ini berhasil meningkatkan pendapatan hingga 4,5x lipat dan pesanan naik lebih dari 400% lewat strategi TikTok Ads GMV Max dan optimasi funnel yang presisi. Hasilnya, ROI melonjak dari 6,16 ke 13,67, membuktikan efektivitas strategi berbasis data dan creative testing yang tepat sasaran.",
    image: portfolio2,
    category: "Tiktok Ads",
    results: "+400% Pesanan"
  },
  {
    id: 3,
    title: "Fashion Brand",
    description: "Pendapatan meningkat lebih dari 6x lipat dan produk terjual melonjak 360%!",
    image: portfolio3,
    category: "Tiktok Ads", 
    results: "+360% Leads/bulan"
  },
  {
    id: 4,
    title: "Fashion Brand",
    description: "GMV meningkat hampir 5x lipat dan produk terjual melonjak lebih dari 13x!",
    image: portofolio4,
    category: "Tiktok Ads",
    results: "+13x Sales Melonjak"
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
              GMV MAX Tiktok Ads
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
              <span className="font-semibold text-black">ROAS Tinggi: 46,06x</span>  
              <p>
                Return on Ad Spend (ROAS) Setiap Rp1 yang diinvestasikan kini menghasilkan Rp46, 
                menandakan efisiensi dan profitabilitas iklan meningkat lebih dari 10x lipat.
              </p>
            </li>
            <li>
              <span className="font-semibold text-black">Pendapatan Melonjak 6,5x Lipat</span>  
              <p>
                Gross revenue meningkat dari Rp106 juta menjadi Rp694 juta, hasil dari kombinasi creative yang lebih relevan,
                CTA kuat, dan optimalisasi struktur iklan di TikTok Ads Manager.
              </p>
            </li>
            <li>
              <span className="font-semibold text-black">Lebih Banyak Pesanan dengan Biaya Lebih Efisien</span>  
              <p>
                Dengan budget yang relatif kecil, Jumlah pesanan naik dari 1.677 menjadi 2.467, 
                sementara biaya per pesanan justru turun dari Rp14.414 menjadi Rp6.113 efisiensi meningkat hampir 60%.
              </p>
            </li>
            <li>
              <span className="font-semibold text-black">Biaya Turun, Hasil Naik</span>  
              <p>
                Total biaya iklan justru menurun dari Rp24 juta menjadi Rp15 juta, namun menghasilkan penjualan yang jauh lebih tinggi. 
                Ini membuktikan efektivitas strategi yang berbasis analisis performa dan segmentasi audiens yang akurat.
              </p>
            </li>
            <li>
              <span className="font-semibold text-black">Strategi</span>  
              <p>
                Kunci keberhasilan ada pada kombinasi antara creative testing, optimasi funnel, dan penyesuaian audiens secara presisi. 
                Hasilnya: ROI meningkat 10x, omzet naik 6,5x, dan biaya semakin efisien.
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full relative p-6">
            
            {/* Tombol Close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Tombol Navigasi Modal */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow hover:bg-gray-100"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>

            {/* Konten modal */}
            <h3 className="text-xl font-semibold mb-4">{portfolioItems[currentIndex].title}</h3>
            <p className="text-muted-foreground mb-4">{portfolioItems[currentIndex].description}</p>
            <img
              src={portfolioItems[currentIndex].image}
              alt={portfolioItems[currentIndex].title}
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
