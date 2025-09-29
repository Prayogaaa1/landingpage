import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Apa itu Digital Marketing dan Apa Gunanya untuk Bisnis Saya? 🤔",
      answer: "Digital Marketing adalah cara mempromosikan produk/jasa lewat internet (sosial media, Google, marketplace). Gunanya untuk meningkatkan awareness, menjangkau lebih banyak calon pembeli, dan meningkatkan penjualan serta keuntungan bisnis Anda! 📈"
    },
    {
      question: "TNTD itu Kerjanya Ngapain Aja? Apa Bedanya Sama Promosi Biasa? 🛠️",
      answer: "Kami adalah partner digital marketing Anda. Kami bantu setting iklan Facebook/Instagram/TikTok/Google dengan targeting tepat, kelola sosial media, dan susun strategi jualan online. Bedanya: kami pakai data dan strategi terukur untuk hasil lebih efektif! 📊"
    },
    {
      question: "Berapa Biaya Jasa TNTD? Cocok untuk Bisnis Kecil? 💰",
      answer: "Paket mulai dari Rp 1.5 Juta/bulan. Sangat cocok untuk UMKM yang serius mengembangkan bisnis online. Kami sesuaikan dengan budget dan kebutuhan Anda. ✅"
    },
    {
      question: "Bisakah Lihat Portfolio TNTD Sebelumnya? 🏆",
      answer: "Tentu! Kami punya banyak studi kasus klien yang berhasil meningkat omsetnya, follower sosmed bertambah, dan iklan lebih efisien. Hasil nyata adalah bukti terbaik! 📂"
    },
    {
      question: "Saya Tidak Paham Teknis, Apakah Sulit Kerja Sama? 😖",
      answer: "Sama sekali tidak sulit! Kami jelaskan dengan bahasa mudah dipahami tanpa jargon rumit. Anda tidak perlu pusing soal teknis - itu tugas kami. Siap #DareToStep bareng kami! 👋"
    },
    {
      question: "Jasa Apa Saja yang TNTD Sediakan?",
      answer: "• Digital Marketing (Ads Facebook/Instagram/TikTok/Google)\n• Social Media Management (konten & strategi)\n• Creative Campaign (photoshoot & videoshoot)\n• Marketplace Optimization (aktivasi & keyword)"
    },
    {
      question: "Apa yang Diperlukan untuk Bekerjasama?",
      answer: "Sesi tanya jawab untuk memahami kebutuhan brand Anda, lalu kumpulkan aset yang diperlukan sesuai objektif bisnis."
    },
    {
      question: "Bagaimana Alur Kerjasama dengan TNTD?",
      answer: "Riset → Buat milestone → Diskusi rutin sesuai jadwal → Report berkala → Rekomendasi & insight untuk kembangkan brand Anda."
    },
    {
      question: "Bagaimana Jika Saya Brand Owner Baru?",
      answer: "1. Tentukan objektif brand\n2. Pilih platform sosial media\n3. Diskusi kebutuhan dengan kami\n4. Kami tawarkan jasa yang cocok dengan kebutuhan Anda"
    }
  ];

  return (
    <section className="py-16 bg-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-section mb-4">
            FAQ yang Mungkin{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Kamu Perlu Tahu!
            </span>
          </h2>
          <p className="text-large text-muted-foreground">
            Pertanyaan yang sering ditanyakan tentang layanan kami
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg border border-border/50 px-6 py-2"
            >
              <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;