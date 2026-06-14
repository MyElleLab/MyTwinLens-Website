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
            <a
              href="https://apps.apple.com/app/id6762047518"
              className="hover:text-tl-text transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store
            </a>
            <Link href="/support" className="hover:text-tl-text transition-colors">
              Support
            </Link>
            <Link href="/privacy" className="hover:text-tl-text transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-tl-text transition-colors">
              Terms of Use
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-xs text-tl-muted">
            &copy; {new Date().getFullYear()} TwinLens
          </div>
        </div>
      </div>
    </footer>
  );
}
