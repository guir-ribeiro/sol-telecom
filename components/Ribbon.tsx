export default function Ribbon() {
  const items = [
    "100% Fibra Óptica",
    "Instalação Grátis",
    "Wi-Fi Plus",
    "Suporte 24/7",
    "Velocidade Real",
    "Sem Fidelidade",
  ];
  const doubled = [...items, ...items];

  return (
    <div
      className="py-3.5 overflow-hidden whitespace-nowrap"
      style={{
        background: "linear-gradient(90deg,#F06A00,#FF8C2A,#F06A00)",
        backgroundSize: "200% 100%",
        animation: "ribbonMove 3s linear infinite",
      }}
      aria-hidden="true"
    >
      <div
        className="inline-flex"
        style={{ animation: "scrollText 25s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 font-bold text-sm text-white px-7">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
