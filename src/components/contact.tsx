import { Phone, Mail, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { BRAND } from "../data/brand";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section id="contacto" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Contacto"
          title="Construyamos tu proyecto"
          subtitle="Agenda una llamada o envíame un mensaje con los detalles de tu idea."
        />

        {/* Más ancho y con gaps grandes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Teléfono */}
          <div className="rounded-3xl border p-6 sm:p-8 lg:p-10 bg-white shadow-sm min-h-[170px] sm:min-h-[190px]">
            <div className="text-slate-500 text-sm sm:text-base mb-3 sm:mb-4">Teléfono</div>
            <a
              href={`tel:${BRAND.phone}`}
              className="inline-flex items-center gap-3 text-slate-900 font-semibold text-xl sm:text-2xl"
            >
              <Phone className="h-5 w-5 sm:h-6 sm:w-6" /> {BRAND.phone}
            </a>
            <p className="text-xs sm:text-sm text-slate-500 mt-3">Horario 9:00–18:00 (L–V)</p>
          </div>

          {/* Correo */}
          <div className="rounded-3xl border p-6 sm:p-8 lg:p-10 bg-white shadow-sm min-h-[170px] sm:min-h-[190px]">
            <div className="text-slate-500 text-sm sm:text-base mb-3 sm:mb-4">Correo</div>
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center gap-3 text-slate-900 font-semibold text-xl sm:text-2xl break-all"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" /> {BRAND.email}
            </a>
            <p className="text-xs sm:text-sm text-slate-500 mt-3">Respuesta en menos de 24h</p>
          </div>

          {/* Redes */}
          <div className="rounded-3xl border p-6 sm:p-8 lg:p-10 bg-white shadow-sm min-h-[170px] sm:min-h-[190px]">
            <div className="text-slate-500 text-sm sm:text-base mb-3 sm:mb-4">Redes</div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-base sm:text-lg">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-slate-900 hover:underline"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" /> Instagram
              </a>
              <a
                href={BRAND.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-slate-900 hover:underline"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" /> LinkedIn
              </a>
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-slate-900 hover:underline"
              >
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
