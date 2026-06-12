import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube, type LucideIcon } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

const productLinks: FooterLink[] = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

const supportLinks: FooterLink[] = [
  { label: "Help Centre", href: "#" },
  { label: "Contact Us", href: "mailto:hello@vukastudy.co.za" },
  { label: "FAQ", href: "#" },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "POPIA Compliance", href: "#" },
];

const socials: { icon: LucideIcon; href: string }[] = [
  { icon: Instagram, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black py-16">
      <div className="container-px">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/VukaStudy_Logo_Final.png"
              alt="VukaStudy"
              width={150}
              height={42}
              className="h-9 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-white/40">
              Past papers. Real results. VukaStudy helps Grade 12 students
              across South Africa Vuka and Grind their way to matric success.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={i}
                    href={social.href}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-vuka-red hover:text-vuka-red"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          <FooterCol title="Product" links={productLinks} />
          <FooterCol title="Support" links={supportLinks} />
          <FooterCol title="Legal" links={legalLinks} />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-white/40 md:flex-row">
          <span>
            © {new Date().getFullYear()} VukaStudy. All rights reserved. Built
            in South Africa 🇿🇦
          </span>
          <span className="font-mono uppercase tracking-widest">Vuka and Grind</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-vuka-red"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
