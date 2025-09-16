import Image from "next/image";

export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="Autocovers.kz"
        width={38}
        height={38}
        className="rounded"
      />
      <span
        className={`font-semibold tracking-wide ${
          className.includes("text-") ? "" : "text-brand-gold"
        }`}
      >
        AUTOCOVERS.KZ
      </span>
    </div>
  );
}
