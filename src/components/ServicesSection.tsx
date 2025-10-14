import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Target,
  Zap,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Konsultan",
    description: "Pelatihan komprehensif selama tiga bulan yang bermanfaat akan membantu Anda dan tim Anda memperbaiki ekosistem iklan marketplace yang Anda milikki.",
    features: [
      "Dua sesi konsultasi mingguan dengan pemilik agensi Tntd yang telah berpengalaman yang memiliki lebih dari 35 brand",
      "Dapatkan materi yang disesuaikan dengan perusahaan anda",
      "Tools spreadsheet yang akan diberikan secara gratis selama masa konsultasi",
      "Dapatkan dukungan langsung dari pemilik perusahaan pemasaran dan tim ahli"
    ],
    color: "from-emerald-500 to-emerald-600"
  },
  {
    icon: Target,
    title: "Social Media Management",
    description: "Dengan cara yang unik dan bernilai, bantu bisnis Anda berkembang dan menjadi lebih dikenal oleh calon pelanggan.",
    features: [
      "Dapatkan tim hingga 3 tim konten (copywriter, content creator & sosial media officer)",
      "Audit sosial media secara terbuka",
      "Strategi mingguan",
      "Laporan Bulanan"
    ],
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Zap,
    title: "Live Tiktok",
    description: "Integrasi real-time dengan berbagai platform untuk memaksimalkan performa dan tracking bisnis Anda.",
    features: [
      "Real-time Data",
      "Multi-platform",
      "API Integration",
      "Dashboard Analytics"
    ],
    color: "from-red-500 to-red-600"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">
            Layanan{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Unggulan Kami
            </span>
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            Solusi digital marketing yang lengkap dan terintegrasi yang memungkinkan Anda mempercepat pertumbuhan bisnis Anda. Setiap layanan dirancang khusus untuk mencapai hasil maksimal.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-elevated p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="heading-card mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="list-disc list-outside pl-5 text-sm text-muted-foreground space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>

              {/* CTA WhatsApp */}
              <a 
                href="https://wa.me/6282240474780?text=Halo%20TnT%20Team%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20layanan%20Anda."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="heading-card mb-4">Mengapa Pilih Kami?</h3>
            <p className="text-muted-foreground">
              Kami tidak hanya membuat, tapi juga memastikan hasil yang terukur untuk bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary-foreground">1</span>
              </div>
              <h4 className="font-semibold mb-2">Analisis Mendalam</h4>
              <p className="text-sm text-muted-foreground">Research komprehensif tentang target market dan kompetitor</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary-foreground">2</span>
              </div>
              <h4 className="font-semibold mb-2">Desain Custom</h4>
              <p className="text-sm text-muted-foreground">Setiap project dibuat khusus sesuai branding dan kebutuhan</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary-foreground">3</span>
              </div>
              <h4 className="font-semibold mb-2">Optimasi Konversi</h4>
              <p className="text-sm text-muted-foreground">A/B testing dan optimization untuk hasil maksimal</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary-foreground">4</span>
              </div>
              <h4 className="font-semibold mb-2">Support Berkelanjutan</h4>
              <p className="text-sm text-muted-foreground">Maintenance dan support untuk memastikan performance optimal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
