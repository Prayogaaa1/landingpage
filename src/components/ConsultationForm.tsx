import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle, User, Mail, Phone, Briefcase, Instagram, Users, Calendar, TrendingUp, DollarSign } from "lucide-react";

const ConsultationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    service: "",
    instagramUsername: "",
    tiktokUsername: "",
    brandName: "",
    companyAge: "",
    monthlyRevenue: "",
    employeeCount: "",
    monthlyMarketingBudget: "",
    businessNeeds: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Cek validasi sederhana (biar aman sebelum kirim WA)
    if (Object.values(formData).some((val) => val.trim() === "")) {
      toast({
        title: "Form belum lengkap!",
        description: "Mohon isi semua field wajib sebelum mengirim.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Format pesan WhatsApp
    const message = `
Halo Admin 👋
Saya ingin konsultasi GRATIS.

📌 Informasi Dasar:
- Nama Lengkap: ${formData.name}
- Email: ${formData.email}
- WhatsApp: ${formData.whatsapp}
- Layanan: ${formData.service}

🏢 Informasi Bisnis:
- Instagram: ${formData.instagramUsername}
- TikTok: ${formData.tiktokUsername}
- Nama Brand: ${formData.brandName}
- Usia Perusahaan: ${formData.companyAge}
- Omset Bulanan: ${formData.monthlyRevenue}
- Jumlah Karyawan: ${formData.employeeCount}
- Budget Marketing: ${formData.monthlyMarketingBudget}

📝 Kebutuhan Bisnis:
${formData.businessNeeds}

Terima kasih 🙏
    `;

    // Ganti nomor WA tujuan sesuai kebutuhan
    const phoneNumber = "6285157564430";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Redirect ke WhatsApp
    window.open(url, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      service: "",
      instagramUsername: "",
      tiktokUsername: "",
      brandName: "",
      companyAge: "",
      monthlyRevenue: "",
      employeeCount: "",
      monthlyMarketingBudget: "",
      businessNeeds: ""
    });

    toast({
      title: "Formulir berhasil dibuat!",
      description: "Anda akan diarahkan ke WhatsApp untuk mengirim data.",
    });

    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="consultation-form" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-section mb-4">
            Dapatkan{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Konsultasi Gratis
            </span>
          </h2>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto">
            Isi formulir di bawah ini dan tim expert kami akan menganalisis bisnis Anda secara GRATIS. 
            Dapatkan strategi khusus untuk meningkatkan omset Anda!
          </p>
        </div>

        <Card className="card-elevated p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Basic Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">Informasi Dasar</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-semibold flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    Nama Lengkap *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Masukkan nama lengkap Anda"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>

                {/* WhatsApp */}
                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-base font-semibold flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    Nomor WhatsApp *
                  </Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="08123456789"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    required
                  />
                </div>

                {/* Service */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-base font-semibold flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-primary" />
                    Layanan yang Dibutuhkan *
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih layanan yang Anda butuhkan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="landing-page">Landing Page Profesional</SelectItem>
                      <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                      <SelectItem value="shopee-ads">Shopee Ads Management</SelectItem>
                      <SelectItem value="social-media">Social Media Marketing</SelectItem>
                      <SelectItem value="website-development">Website Development</SelectItem>
                      <SelectItem value="consultation">Konsultasi Bisnis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Business Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">Informasi Bisnis</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Instagram */}
                <div className="space-y-2">
                  <Label htmlFor="instagramUsername" className="text-base font-semibold flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-primary" />
                    Username IG Bisnis *
                  </Label>
                  <Input
                    id="instagramUsername"
                    type="text"
                    placeholder="@tntd.id"
                    value={formData.instagramUsername}
                    onChange={(e) => handleInputChange('instagramUsername', e.target.value)}
                    required
                  />
                </div>

                {/* TikTok */}
                <div className="space-y-2">
                  <Label htmlFor="tiktokUsername" className="text-base font-semibold flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    Username TikTok *
                  </Label>
                  <Input
                    id="tiktokUsername"
                    type="text"
                    placeholder="@next_things"
                    value={formData.tiktokUsername}
                    onChange={(e) => handleInputChange('tiktokUsername', e.target.value)}
                    required
                  />
                </div>

                {/* Brand Name */}
                <div className="space-y-2">
                  <Label htmlFor="brandName" className="text-base font-semibold flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-primary" />
                    Nama Brand *
                  </Label>
                  <Input
                    id="brandName"
                    type="text"
                    placeholder="The Next Thing Digital Agency"
                    value={formData.brandName}
                    onChange={(e) => handleInputChange('brandName', e.target.value)}
                    required
                  />
                </div>

                {/* Company Age */}
                <div className="space-y-2">
                  <Label htmlFor="companyAge" className="text-base font-semibold flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    Usia Perusahaan *
                  </Label>
                  <Input
                    id="companyAge"
                    type="text"
                    placeholder="2 tahun"
                    value={formData.companyAge}
                    onChange={(e) => handleInputChange('companyAge', e.target.value)}
                    required
                  />
                </div>

                {/* Monthly Revenue */}
                <div className="space-y-2">
                  <Label htmlFor="monthlyRevenue" className="text-base font-semibold flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Omset per Bulan *
                  </Label>
                  <Input
                    id="monthlyRevenue"
                    type="text"
                    placeholder="Rp 10.000.000"
                    value={formData.monthlyRevenue}
                    onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                    required
                  />
                </div>

                {/* Employee Count */}
                <div className="space-y-2">
                  <Label htmlFor="employeeCount" className="text-base font-semibold flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Jumlah Karyawan *
                  </Label>
                  <Input
                    id="employeeCount"
                    type="text"
                    placeholder="5 orang"
                    value={formData.employeeCount}
                    onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                    required
                  />
                </div>

                {/* Monthly Marketing Budget */}
                <div className="space-y-2">
                  <Label htmlFor="monthlyMarketingBudget" className="text-base font-semibold flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-primary" />
                    Biaya Marketing per Bulan *
                  </Label>
                  <Input
                    id="monthlyMarketingBudget"
                    type="text"
                    placeholder="Rp 2.000.000"
                    value={formData.monthlyMarketingBudget}
                    onChange={(e) => handleInputChange('monthlyMarketingBudget', e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Business Needs */}
              <div className="space-y-2">
                <Label htmlFor="businessNeeds" className="text-base font-semibold flex items-center gap-2">
                  <Send className="h-4 w-4 text-primary" />
                  Tolong ceritakan apa yang bisa The Next Thing Digital bantu untuk Brand kamu *
                </Label>
                <Textarea
                  id="businessNeeds"
                  placeholder="Ceritakan tantangan bisnis Anda..."
                  value={formData.businessNeeds}
                  onChange={(e) => handleInputChange('businessNeeds', e.target.value)}
                  className="min-h-[100px]"
                  required
                />
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-secondary/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-foreground mb-3">Yang Anda Dapatkan:</h3>
              <div className="grid md:grid-cols-2 gap-2">
                {[
                  "Analisis bisnis mendalam",
                  "Strategi pemasaran khusus",
                  "Konsultasi 1-on-1 dengan expert",
                  "Action plan yang actionable"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit */}
            <Button 
              type="submit" 
              className="btn-hero w-full group"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Mengirim...
                </>
              ) : (
                <>
                  Konsultasi Sekarang - GRATIS!
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Dengan mengirim formulir ini, Anda setuju dengan{" "}
              <span className="text-primary font-medium">syarat dan ketentuan</span> kami.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ConsultationForm;
