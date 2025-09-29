import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.getElementById('porto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-900 to-gray-900">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content - Illustration */}
          <div className="order-2 lg:order-1">
            <img 
              src={heroIllustration}
              alt="Business growth journey illustration showing revenue increase"
              className="w-full h-auto max-w-lg mx-auto"
            />
          </div>

          {/* Right Content - Text */}
          <div className="text-white space-y-8 order-1 lg:order-2">
            <div className="inline-block bg-red-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-red-400/30">
              <span className="text-red-400 font-semibold">🚀 THE NEXT THING DIGITAL</span>
            </div>
            
            <h1 className="heading-hero">
              Di tiga bulan pertama,{" "}
              <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
              iklan Anda akan menjadi lebih realistis!
              </span>{" "}
              Jaminan pendapatan untuk bulan pertama!
            </h1>

            <p className="text-large text-white/90">
              TNTD membantu Anda mengendalikan anggaran iklan Anda dan meningkatkan efektivitas Iklan Anda. 
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToForm}
                className="btn-hero group"
              >
                Konsultasi Gratis Sekarang
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={scrollToPortfolio} 
                variant="outline" 
                className="btn-secondary"
              >
                Lihat Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;