import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#EAEFF8] text-black font-light text-xs border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        
        {/* Column 1: Clinic Overview */}
        <div className="space-y-3">
          <div className="text-sm font-normal tracking-widest text-black">
            <span className="text-[#C5A059] font-serif">DE AESTHETICS</span>
          </div>
          <p className="leading-relaxed max-w-xs text-black">
            Clinical integration of premium dentistry and non-surgical facial treatments tailored to your structural symmetry.
          </p>
        </div>

        {/* Column 2: Quick Service Shortcuts */}
        <div className="space-y-2">
          <div className="text-black font-medium tracking-wide mb-1">Our Focus</div>
          <ul className="space-y-1.5 text-black">
            <li><Link href="/services" className="hover:text-sky-600 transition-colors">Dental Implants & Orthodontics</Link></li>
            <li><Link href="/services" className="hover:text-sky-600 transition-colors">Botox & Targeted Fillers</Link></li>
            <li><Link href="/services" className="hover:text-sky-600 transition-colors">Clinical Skin Treatments</Link></li>
            <li><Link href="/services" className="hover:text-sky-600 transition-colors">IV Nutrient Therapy</Link></li>
          </ul>
        </div>

        {/* Column 3: Hours / Availability */}
        <div className="space-y-2">
          <div className="text-black font-bold font-medium tracking-wide mb-1">Clinic Schedule</div>
          <p className="leading-relaxed text-black">
            Mon — Fri: 09:00 AM – 06:00 PM<br />
            Saturday: By Prior Appointment Only<br />
            Sunday: Closed
          </p>
        </div>

      </div>

      {/* Bottom Copyright Line */}
      <div className="border-t border--900 py-6 text-center text--400 text-[11px] tracking-wide">
        &copy; {new Date().getFullYear()} DE AESTHETICS. All rights reserved. Clinical treatments administered strictly by licensed specialists.
      </div>
    </footer>
  );
}