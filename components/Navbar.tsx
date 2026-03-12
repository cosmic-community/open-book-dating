import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">📖</span>
            <span className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">
              Open Book Dating
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#features"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#pricing"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/#team"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Team
            </Link>
            <Link
              href="/blog"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/#waitlist"
              className="px-5 py-2 rounded-full gradient-bg text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Join Waitlist
            </Link>
          </div>
          <div className="md:hidden">
            <Link
              href="/#waitlist"
              className="px-4 py-2 rounded-full gradient-bg text-white text-sm font-semibold"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}