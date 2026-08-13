interface LogoProps {
  className?: string;
  priority?: boolean;
}

export default function Logo({
  className = "h-14 w-[150px] sm:h-16 sm:w-[170px]",
  priority = false,
}: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-agpr.png"
      alt="AGPR — Agir Pour Réussir"
      width={400}
      height={400}
      className={`block shrink-0 object-contain object-left ${className}`}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
    />
  );
}
