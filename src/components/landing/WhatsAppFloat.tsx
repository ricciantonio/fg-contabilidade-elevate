import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { openWhatsApp } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <motion.button
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => openWhatsApp()}
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_32px_rgba(37,211,102,0.45)] transition-shadow hover:shadow-[0_10px_40px_rgba(37,211,102,0.6)] sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-7 w-7 fill-white text-white sm:h-8 sm:w-8" strokeWidth={0} />
    </motion.button>
  );
}
