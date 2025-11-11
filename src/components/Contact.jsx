import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/60 p-6">
      <div className="flex items-center gap-2 text-slate-800 font-semibold mb-4">
        <Mail size={18} />
        Contact
      </div>
      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
        <input
          required
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400"
        />
        <input
          required
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400"
        />
        <textarea
          required
          placeholder="Message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400"
        />
        <button type="submit" className="inline-flex items-center gap-2 justify-center rounded-lg bg-slate-900 text-white px-4 py-2 font-medium hover:bg-slate-800">
          <Send size={16} /> Send
        </button>
        {sent && (
          <p className="text-sm text-green-600">Thanks! Your message has been noted.</p>
        )}
      </form>
    </div>
  );
}
