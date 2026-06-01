import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Smile, 
  Sparkles, 
  User, 
  Zap, 
  Droplet, 
  Plus
} from 'lucide-react';

export default function ServicesPage() {
  const dentalServices = [
    {
      title: "Dental Implants",
      desc: "Permanent structural replacements for missing teeth, built to function naturally and restore bite integrity.",
      icon: <CheckCircle2 className="w-6 h-6" />
    },
    {
      title: "Root Canal",
      desc: "Precise therapeutic treatment designed to preserve natural tooth structure and eliminate deep-seated infection.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Braces & Aligners",
      desc: "Orthodontic solutions utilizing clear aligners or traditional tracking to align smiles with clinical precision.",
      icon: <Smile className="w-6 h-6" />
    }
  ];

  const aestheticServices = [
    {
      title: "Botox & Fillers",
      desc: "Targeted injectables designed to soften fine lines and balance facial volume for a rejuvenated profile.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Skin Treatments",
      desc: "Clinical therapies curated to optimize texture, tone, and skin health using premium biocompatible serums.",
      icon: <User className="w-6 h-6" />
    },
    {
      title: "Laser Hair Removal",
      desc: "Precision laser technologies offering lasting hair reduction across diverse skin types with minimal discomfort.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "IV Drip Therapy",
      desc: "Formulated intravenous nutrient infusions designed to assist systemic recovery, hydration, and cellular wellness.",
      icon: <Droplet className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-[#FAF8F5] pb-24 animate-reveal-up">
      
      {/* HERO SECTION */}
      <section className="pt-24 pb-16 text-center max-w-4xl mx-auto px-6 space-y-4">
        <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">Bespoke Care</span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#0F1E36]">Our Signature Treatments</h1>
        <p className="text-[#5A6578] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          From foundational oral health to advanced facial rejuvenation, we combine clinical mastery with an artistic eye.
        </p>
      </section>

      {/* DENTAL PROCEDURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#0F1E36]">Dental Procedures</h2>
          <div className="h-px flex-grow bg-[#EBE8E2]"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {dentalServices.map((service, index) => (
            <div key={index} className="group bg-white border border-[#EBE8E2] rounded-[2rem] p-8 transition-all duration-300 hover:shadow-xl hover:border-[#C5A059]/30">
              <div className="w-12 h-12 rounded-2xl bg-[#F4F7FB] flex items-center justify-center text-[#0F1E36] mb-6 group-hover:bg-[#0F1E36] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif text-[#0F1E36] font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-[#5A6578] leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="flex items-center text-xs font-bold text-[#C5A059] uppercase tracking-widest cursor-pointer group-hover:gap-2 transition-all">
                Learn Details <Plus className="w-3 h-3 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AESTHETIC TREATMENTS SECTION */}
      <section className="bg-[#EAEFF8] py-24 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0F1E36]">Aesthetic Treatments</h2>
            <div className="h-px flex-grow bg-[#CBD2DC]"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aestheticServices.map((service, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm border border-white rounded-[1.5rem] p-6 transition-all hover:bg-white hover:shadow-lg">
                <div className="text-[#C5A059] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-serif text-[#0F1E36] font-semibold mb-2">{service.title}</h3>
                <p className="text-xs text-[#5A6578] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 pt-24 text-center">
        <div className="bg-[#0F1E36] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C5A059] opacity-10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif text-white max-w-2xl mx-auto leading-tight">
              Ready to begin your <span className="italic text-[#C5A059]">aesthetic journey?</span>
            </h2>
            <p className="text-[#CBD2DC] text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Book a comprehensive consultation with our specialists to map out your personalized treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/#book" 
                className="bg-[#C5A059] hover:bg-[#B48F48] text-[#0F1E36] px-10 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                Book Your Consultation <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="tel:+123456789" 
                className="bg-transparent border border-white/20 hover:border-white text-white px-10 py-4 rounded-full font-medium transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}