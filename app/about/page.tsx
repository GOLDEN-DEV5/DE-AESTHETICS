import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-[#FAF8F5] animate-reveal-up space-y-24 pb-24">
      
      {/* HEADER SECTION */}
      <section className="pt-20 text-center max-w-3xl mx-auto px-6 space-y-4">
        <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">Our Legacy</span>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#0F1E36]">Meet the Vision Behind DE AESTHETICS</h1>
        <p className="text-[#5A6578] text-base sm:text-lg">We established our boutique studio on a single premise: that clinical excellence should never compromise absolute client peace.</p>
      </section>

      {/* BIOGRAPHY SECTION */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl bg-[#E2E8F0]">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600" 
              alt="Lead Dentist Portrait" 
              className="w-full h-full object-cover contrast-[102%]"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-[#EBE8E2]">
              <h3 className="font-serif text-lg text-[#0F1E36] font-semibold">Dr. Evelyn Vance, DDS</h3>
              <p className="text-xs text-[#C5A059] font-medium uppercase tracking-wider mt-0.5">Founder & Lead Aesthetic Surgeon</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#0F1E36]">A Visionary Approach to Holistic Dental Wellness</h2>
          <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed">
            Dr. Evelyn Vance completed her advanced cosmetic training at top-tier institutions, developing an internationally recognized eye for natural facial symmetry. Over her fifteen years in practice, she observed that traditional environments prioritized processing volume over patient care.
          </p>
          <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed">
            DE AESTHETICS was built to counter that standard. By blending modern diagnostic techniques with clean, biocompatible elements, she crafts healthy restoration strategies uniquely balanced around your overall systemic lifestyle.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {[
              "Northwestern Dental Graduate (DDS)",
              "Aesthetic Mastery Certification",
              "Biological Health Practitioner",
              "Published Clinical Educator"
            ].map((credential, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-[#0F1E36] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>{credential}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY MANIFESTO TIMELINE */}
      <section className="bg-[#EAEFF8] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">The Pillars</span>
            <h2 className="text-3xl font-serif text-[#0F1E36]">Our Code of Care</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Uncompromising Transparency", text: "We walk through every digital scan alongside you, mapping out clear timelines and fixed investments before care begins." },
              { num: "02", title: "Systemic Integration", text: "We recognize that oral bacteria, heavy compounds, and sleep mechanics are indicators of full-body longevity." },
              { num: "03", title: "Artistry Over Production", text: "We limit daily patient capacities to give our team ample time to craft restorations with absolute structural integrity." }
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-[#CBD2DC] relative space-y-4">
                <div className="text-4xl font-serif text-[#C5A059]/30 font-bold">{pillar.num}</div>
                <h4 className="font-serif text-lg text-[#0F1E36] font-medium">{pillar.title}</h4>
                <p className="text-xs sm:text-sm text-[#5A6578] leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}