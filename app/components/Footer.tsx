import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-tl-border px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/app-icon.jpeg"
              alt="TwinLens icon"
              width={24}
              height={24}
              className="rounded-md"
            />
            <span className="font-semibold text-tl-text mono-heading text-sm tracking-widest">
              TWINLENS
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-tl-muted">
            <Link href="/privacy" className="hover:text-tl-text transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-tl-text transition-colors">
              Terms of Use
            </Link>
            <Link href="/support" className="hover:text-tl-text transition-colors">
              Support
            </Link>
            <a
              href="https://github.com/leofrht-jpg/TwinLens-App"
              className="hover:text-tl-text transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </nav>

          {/* Right side */}
          <div className="flex flex-col items-center md:items-end gap-1 text-xs text-tl-muted">
            <span>&copy; {new Date().getFullYear()} Leo Frht</span>
            <span className="text-tl-hint">
              Zero data collected. No analytics. No tracking.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
