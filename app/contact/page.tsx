'use client';
import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Form states matching the API keys
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    consultation: 'Dental Consultation',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Thank you. Our clinic coordinator will contact you shortly.');
        // Reset form inputs
        setFormData({ name: '', email: '', consultation: 'Dental Consultation', message: '' });
      } else {
        setStatus(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Network error. Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/90 min-h-screen py-20">
      <div className="max-w-xl mx-auto px-6">
        <div className="text-center mb-12 animate-reveal-up">
          <h1 className="text-3xl md:text-4xl font-serif tracking-wide text-[#C5A059]">Connect with Us</h1>
          <div className="h-0.5 w-12 bg-slate-900 mx-auto mt-4"></div>
          <p className="text-black text-sm mt-3 font-serif">Submit an inquiry to book your assessment space.</p>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-sm min-h-[400px] flex flex-col justify-center animate-reveal-up [animation-delay:150ms] fill-mode-backwards">
          {status ? (
            <div className="p-4 bg-slate-950 text-white border border-slate-800 rounded-lg text-sm font-light text-center animate-fade-in">
              {status}
              {!loading && (
                <button onClick={() => setStatus(null)} className="block mx-auto mt-4 text-xs text-white underline hover:text-[#C5A059]">
                  Send another message
                </button>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-white mb-2">Full Name</label>
                <input 
                  required 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-950/60 border border-slate-800 text-white rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] font-light" 
                />
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-white mb-2">Contact Email</label>
                <input 
                  required 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-950/60 border border-slate-800 text-white rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] font-light" 
                />
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-white mb-2">Requested Consultation Type</label>
                <select 
                  value={formData.consultation}
                  onChange={(e) => setFormData({...formData, consultation: e.target.value})}
                  className="w-full bg-slate-950/60 border border-slate-800 text-slate-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] font-light"
                >
                  <option className="bg-slate-900">Dental Consultation</option>
                  <option className="bg-slate-900">Aesthetic Consultation</option>
                  <option className="bg-slate-900">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-white mb-2">Message or Care Inquiry</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-950/60 border border-slate-800 text-white rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] font-light" 
                  placeholder="Please share your preferred treatment area or question..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#C5A059] hover:bg-[#C5A049] disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 font-medium text-sm tracking-wide py-3 rounded-md transition-all shadow-sm flex items-center justify-center"
              >
                {loading ? 'Sending...' : 'Submit Inquiry'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}