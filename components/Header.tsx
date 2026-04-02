"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { openWhatsApp } from "@/lib/whatsapp";

const navLinks = [
  { href: "/",         label: "Início"          },
  { href: "/planos",   label: "Para você"       },
  { href: "/cobertura",label: "Cobertura"       },
  { href: "/", label: "Para sua empresa"},
  { href: "/suporte",  label: "Atendimento"     },
];

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-[999] transition-all duration-300 backdrop-blur-xl
        border-b border-white/[0.07]
        ${scrolled
          ? "bg-[rgba(11,17,32,0.98)] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-[rgba(11,17,32,0.85)]"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between py-3 gap-5">

        {/* BRAND */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="relative h-10 w-[140px]">
            <Image
              src="/assets/logo.png"
              alt="Sol Telecom"
              fill
              sizes="140px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium px-3.5 py-2 rounded-lg transition-all
                  ${isActive
                    ? "text-white bg-white/[0.08]"
                    : "text-[#94A3B8] hover:text-white hover:bg-white/[0.05]"
                  }
                `}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#F06A00] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* AÇÕES DESKTOP */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={() => openWhatsApp("Assine já")}
            className="btn-orange text-sm px-5 py-2"
          >
            🚀 ASSINE JÁ
          </button>
        </div>

        {/* MOBILE: Hamburguer */}
        <div className="md:hidden flex items-center gap-2">
          <button
            className="flex items-center gap-2 border border-white/10 text-white px-3 py-2 rounded-lg text-sm transition-all hover:bg-white/[0.06]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`} />
            <span>{menuOpen ? "Fechar" : "Menu"}</span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          border-b border-white/[0.07] bg-[rgba(11,17,32,0.98)] backdrop-blur-xl
          ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium px-4 py-3 rounded-lg transition-all
                  ${isActive
                    ? "text-white bg-white/[0.08] border-l-2 border-[#F06A00]"
                    : "text-[#94A3B8] hover:text-white hover:bg-white/[0.05]"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}

          <button
            onClick={() => openWhatsApp("Assine já")}
            className="btn-orange mt-2 w-full"
          >
            🚀 ASSINE JÁ
          </button>
        </div>
      </div>
    </header>
  );
}
