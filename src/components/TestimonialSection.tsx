import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "CEO PT. Digital Sukses",
    avatar: "BS",
    rating: 5,
    text: "Landing page yang dibuat team ini luar biasa! Dalam 2 minggu pertama, leads kami naik 400% dan conversion rate meningkat drastis. ROI yang didapat jauh melebihi ekspektasi.",
    result: "+400% Leads",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    name: "Sari Dewi",
    role: "Founder Toko Fashion Online",
    avatar: "SD",
    rating: 5,
    text: "Sebelumnya online shop saya sepi pengunjung. Setelah menggunakan jasa mereka, penjualan online melonjak 5x lipat! Strategi digital marketing mereka benar-benar works.",
    result: "+500% Sales",
    color: "from-pink-500 to-pink-600"
  },
  {
    id: 3,
    name: "Ahmad Rahman",
    role: "Business Coach",
    avatar: "AR",
    rating: 5,
    text: "Profesional, responsif, dan hasil kerja berkualitas tinggi. Landing page untuk coaching business saya berhasil generate 50+ klien premium dalam 3 bulan. Highly recommended!",
    result: "50+ Premium Clients",
    color: "from-emerald-500 to-emerald-600"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">
            Apa Kata{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Klien Kami?
            </span>
          </h2>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto">
            Jangan hanya percaya kata kami. Dengarkan langsung pengalaman klien yang telah merasakan 
            peningkatan signifikan untuk bisnis mereka.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-elevated p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-12 w-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>

              {/* Result Badge */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-center">
                <div className="text-sm text-primary font-semibold mb-1">HASIL:</div>
                <div className="text-lg font-bold text-primary">{testimonial.result}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5X</div>
              <div className="text-sm text-muted-foreground">Avg. Revenue Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;