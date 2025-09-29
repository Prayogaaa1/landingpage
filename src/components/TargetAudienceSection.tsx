const TargetAudienceSection = () => {
  const targetAudiences = [
    {
      title: "Jasa",
      description: "Pebisnis Jasa yang kesulitan dapetin leads"
    },
    {
      title: "Fashion", 
      description: "Pebisnis Fashion & Fashion Muslim yang mau banjir order"
    },
    {
      title: "F&B",
      description: "Pebisnis F&B yang pengen outlet rame pembeli"
    },
    {
      title: "Konveksi",
      description: "Pebisnis Konveksi yang mau produksi besar karena demand tinggi"
    },
    {
      title: "Aqiqah",
      description: "Pebisnis Aqiqah yang butuh strategi ads biar pesanan stabil"
    },
    {
      title: "Beauty & Herbal",
      description: "Pebisnis Beauty & Herbal yang mau produk makin viral"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-red-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Siapa yang cocok pakai jasa kami?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Khusus untuk Anda para Pebisnis yang serius mau meningkatkan omzet:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targetAudiences.map((audience, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                {audience.title}
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;