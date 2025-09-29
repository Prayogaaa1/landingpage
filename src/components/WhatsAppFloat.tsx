import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const whatsappNumber = "6281234567890"; // Format: country code + number without +
    const message = "Halo! Saya tertarik untuk konsultasi tentang digital marketing. Bisa dibantu?";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center gap-3 group animate-pulse-slow hover:animate-none z-50 transition-all duration-300"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      <span className="font-semibold text-sm hidden sm:block">
        Chat Sekarang
      </span>
      
      {/* Notification dot */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
    </button>
  );
};

export default WhatsAppFloat;