import "./TiendaButton.css";
import type { CSSProperties } from "react";

/** Botón animado de marca. Por defecto enlaza a la tienda en línea. */
export default function TiendaButton({
  href = "/tienda",
  label = "Tienda en línea",
  className = "",
}: {
  href?: string;
  label?: string;
  className?: string;
}) {
  const TEXTO = label;
  return (
    <a href={href} className={`tienda-btn ${className}`.trim()}>
      <span className="tienda-btn__outline" aria-hidden="true" />
      <span className="tienda-btn__label">
        {TEXTO.split("").map((letra, i) => (
          <span key={i} style={{ "--i": i } as CSSProperties} aria-hidden="true">
            {letra}
          </span>
        ))}
      </span>
      <span className="sr-only">{TEXTO}</span>
    </a>
  );
}
