'use client';

import { useState } from 'react';

interface WaitlistFormProps {
  ctaText?: string;
  variant?: 'hero' | 'section';
}

export default function WaitlistForm({
  ctaText = 'Join the Waitlist',
  variant = 'hero',
}: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // In production, this would submit to an API
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 4000);
  };

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3 justify-center lg:justify-start animate-fade-in">
        <div className="glass rounded-2xl px-6 py-4 flex items-center gap-3">
          <span className="text-2xl">🎉</span>
          <div>
            <p className="text-white font-semibold">You&apos;re on the list!</p>
            <p className="text-sm text-gray-300">
              We&apos;ll notify you when we launch.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'section') {
    return (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
        />
        <button
          type="submit"
          className="px-8 py-3.5 rounded-full gradient-bg text-white font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          {ctaText}
        </button>
      </form>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto lg:mx-0"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 px-5 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="px-8 py-4 rounded-full gradient-bg text-white font-bold text-lg hover:opacity-90 transition-opacity whitespace-nowrap shadow-lg shadow-pink-500/25"
      >
        {ctaText} 🚀
      </button>
    </form>
  );
}