import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const features = [
    "Digital Performance Marketing : Strategi Facebook & Instagram Ads yang terbukti efektif",
    "Riset mendalam target audience dan kompetitor",
    "Creative ads yang engaging dan conversion-focused",
    "Konsultasi harian untuk semua aspek periklanan media sosial dan saran strategi",
    "Tracking & analytics untuk monitor performance",
    "Weekly report dan optimization berkelanjutan",
    "Perhitungan ROAS (Return on Ad Spend) untuk mencapai KPI dan ROI (BEP)",
    "Laporan performa bulanan dalam format PDF atau spreadsheet"
  ];

  // ✅ Tambahkan fungsi scrollToForm
  const scrollToForm = () => {
    const formElement = document.getElementById("consultation-form"); // pastikan ID form benar
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-semibold mb-6">
            Waktunya Scale Up Bisnis Anda!
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="mb-8">
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                XXX Juta
                <span className="text-2xl text-gray-600 font-normal"> / bulan</span>
              </div>
              <p className="text-lg text-gray-600 font-medium">
                Investasi Terbaik untuk Masa Depan Bisnis Anda
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">
                Yang Akan Anda Dapatkan:
              </h3>
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 text-left">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full inline-block mb-4">
                <span className="font-bold">PROMO SPESIAL BULAN INI!</span>
              </div>
              <div className="mb-6">
                <p className="text-gray-600 mb-2">Khusus untuk 10 klien pertama:</p>
                <div className="text-4xl font-bold text-red-600">
                  Hanya x Juta
                  <span className="text-lg text-gray-500 line-through ml-2">x Juta</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Untuk bulan pertama + Setup gratis senilai jutaan
                </p>
              </div>
              
              <Button 
                size="lg" 
                onClick={scrollToForm} // ✅ sudah aman
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold rounded-xl"
              >
                Ambil Promo Sekarang - Hemat jutaan! 🔥
              </Button>
              
              <p className="text-xs text-gray-500 mt-3">
                *Promo terbatas dan bisa berakhir kapan saja
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
