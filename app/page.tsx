import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Award, Smile, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-24 animate-reveal-up pb-24 bg-[#FAF8F5]">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-16 lg:pt-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAEFF8] text-[#0F1E36] text-xs font-semibold tracking-wider uppercase">
              Redefining the Dental Experience
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#0F1E36] leading-[1.15] tracking-tight">
              A healthier smile, crafted with <span className="italic text-[#C5A059]">artistry & care</span>.
            </h1>
            <p className="text-base sm:text-lg text-[#5A6578] leading-relaxed">
              Experience modern, minimally invasive dentistry in a space designed entirely around your comfort. 
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a href="./contact" className="bg-[#0F1E36] hover:bg-[#1A2E4C] text-white px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#0F1E36]/10">
                Schedule Your Visit <ArrowRight className="w-4 h-4" />
              </a>
              <a href="tel:03169186572" className="border border-[#CBD2DC] hover:border-[#0F1E36] text-[#0F1E36] px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059]" /> (+92) 316-9186572
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-[#E2E8F0]">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" alt="Clinic Layout" className="w-full h-full object-cover grayscale-[10%]" />
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: STATS BANNER */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-[#0F1E36] text-white rounded-[2rem] p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center shadow-xl">
          {[
            { metric: "99%", label: "Patient Satisfaction" },
            { metric: "15+", label: "Years of Mastery" },
            { metric: "12k+", label: "Smiles Transformed" },
            { metric: "0", label: "Rushed Appointments" }
          ].map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl md:text-4xl font-serif text-[#C5A059] font-bold">{stat.metric}</div>
              <div className="text-xs md:text-sm text-[#CBD2DC] tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUE PROP SECTION */}
      <section id="about" className="bg-[#EAEFF8] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">Our Standards</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#0F1E36]">Where clinical mastery meets serene comfort.</h2>
            </div>
            <div className="space-y-6">
              {[
                { icon: <ShieldCheck />, title: "Biocompatible Materials Only", text: "We explicitly prioritize toxin-free, durable compounds that protect systemic health." },
                { icon: <Award />, title: "Board-Certified Specialists", text: "Our clinical team actively leads continuing education initiatives in modern aesthetic fields." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#C5A059] shadow-sm">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-[#0F1E36]">{item.title}</h4>
                    <p className="text-sm text-[#5A6578] mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#CBD2DC]">
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" alt="Dentistry Tools" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
          </div>
        </div>
      </section>

      {/* NEW SECTION: TECHNOLOGY & SPA AMENITIES */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">The Experience</span>
          <h2 className="text-3xl font-serif text-[#0F1E36]">Advanced Tech Meets Spa Calm</h2>
          <p className="text-sm text-[#5A6578]">We eliminate clinical anxiety by pairing diagnostic technology with ultra-premium patient comfort comforts.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Smile />, title: "Noise-Canceling Rest", desc: "Enjoy premium noise-canceling headphones paired with curated visual treatments during your visit." },
            { icon: <Shield />, title: "Ultra-Low Radiation 3D Imaging", desc: "Our HD CBCT scans cut diagnostic radiation exposure down by up to 80% compared to legacy machines." },
            { icon: <Sparkles />, title: "Warm Aromatherapy Welcomes", desc: "Calming custom herbal scents flow continuously through dedicated climate systems to neutralize odors." }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-[#EBE8E2] rounded-3xl p-8 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] flex items-center justify-center text-[#C5A059]">{item.icon}</div>
              <h4 className="font-serif text-lg text-[#0F1E36] font-medium">{item.title}</h4>
              <p className="text-xs text-[#5A6578] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEW SECTION: FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">Common Inquiries</span>
          <h2 className="text-3xl font-serif text-[#0F1E36] mt-2">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            { q: "Do you accept dental insurance?", a: "We work seamlessly with most PPO insurance plans. Our team handles all documentation directly to help maximize your benefits out-of-network." },
            { q: "What makes biological dentistry different?", a: "Biological dentistry treats oral health as an integrated part of your whole body, utilizing non-toxic materials and focusing on long-term systemic health preservation." },
            { q: "How long does a cosmetic smile layout take?", a: "Most visual smile transformations require only 2 to 3 comfortable visits from diagnostic design to final application." }
          ].map((item, i) => (
            <details key={i} className="group bg-white border border-[#EBE8E2] rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between gap-4 font-serif text-[#0F1E36] font-medium text-sm sm:text-base">
                <span>{item.q}</span>
                <span className="transition duration-300 group-open:-rotate-180 text-[#C5A059]">&darr;</span>
              </summary>
              <p className="mt-4 text-xs sm:text-sm text-[#5A6578] leading-relaxed border-t border-[#FAF8F5] pt-4">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}