import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, Zap } from "lucide-react";

const CTASection = () => {
  const scrollToForm = () => {
    document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#5c0f0f] via-[#8b1d1d] to-[#1a0a0a] relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-white rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-32 right-16 w-8 h-8 bg-white rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Header */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Jangan Lewatkan Kesempatan Emas Ini!
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
          Bergabunglah dengan 500+ business owner sukses yang telah meningkatkan omset mereka hingga 5X lipat. 
          <strong className="text-white"> Konsultasi GRATIS terbatas!</strong>
        </p>

        {/* Urgency Elements */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <Clock className="h-8 w-8 text-white mb-3 mx-auto" />
            <div className="text-white font-semibold mb-1">Terbatas</div>
            <div className="text-white/80 text-sm">Hanya 10 slot konsultasi gratis tersisa bulan ini</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <Shield className="h-8 w-8 text-white mb-3 mx-auto" />
            <div className="text-white font-semibold mb-1">100% Garansi</div>
            <div className="text-white/80 text-sm">Uang kembali jika tidak puas dengan hasilnya</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <Zap className="h-8 w-8 text-white mb-3 mx-auto" />
            <div className="text-white font-semibold mb-1">Fast Response</div>
            <div className="text-white/80 text-sm">Tim kami akan menghubungi dalam 24 jam</div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="space-y-6">
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group"
          >
            Konsultasi Gratis Sekarang - TERBATAS!
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="text-white/80 text-sm">
            ⚡ Respon cepat dalam 24 jam • 🎯 Strategi khusus untuk bisnis Anda • 🔒 Konsultasi 100% gratis
          </p>
        </div>

        {/* Social Proof */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-white/70 text-sm mb-4">Dipercaya oleh:</p>
          <div className="flex justify-center items-center space-x-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-xs">Business Owners</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">5X</div>
              <div className="text-xs">Revenue Growth</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-xs">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Warning Text */}
        <div className="mt-8 bg-white/5 border border-white/20 rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-white/90 text-sm">
            ⚠️ <strong>Peringatan:</strong> Slot konsultasi gratis sangat terbatas. 
            Jika Anda serius ingin meningkatkan omset bisnis, jangan tunda lagi. 
            <strong> Aksi hari ini = Hasil bulan depan!</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;