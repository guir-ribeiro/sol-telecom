"use client";

import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema"
      className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer group overflow-hidden"
      style={{
        background: isDark
          ? "linear-gradient(135deg, rgba(240,106,0,0.12), rgba(255,140,42,0.06))"
          : "linear-gradient(135deg, rgba(13,76,139,0.15), rgba(21,101,192,0.08))",
        border: isDark
          ? "1px solid rgba(240,106,0,0.35)"
          : "1px solid rgba(13,76,139,0.35)",
        boxShadow: isDark
          ? "0 0 12px rgba(240,106,0,0.15), inset 0 1px 0 rgba(255,255,255,0.05)"
          : "0 0 12px rgba(13,76,139,0.15), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {/* Glow radial ao hover */}
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(240,106,0,0.25) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(13,76,139,0.25) 0%, transparent 70%)",
        }}
      />

      {/* Ícone com rotação + glow */}
      <span
        className="relative z-10 transition-all duration-500"
        style={{
          transform: isDark ? "rotate(0deg) scale(1)" : "rotate(180deg) scale(1)",
          filter: isDark
            ? "drop-shadow(0 0 6px rgba(255,140,42,0.8))"
            : "drop-shadow(0 0 6px rgba(21,101,192,0.8))",
        }}
      >
        {isDark ? (
          <i className="fa-solid fa-sun" style={{ color: "#FF8C2A", fontSize: "14px" }} />
        ) : (
          <i className="fa-solid fa-moon" style={{ color: "#1565C0", fontSize: "14px" }} />
        )}
      </span>
    </button>
  );
}
