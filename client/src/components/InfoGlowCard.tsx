import { ChevronRight } from "lucide-react";
import "./InfoGlowCard.css";

type Props = {
  title: string;
  text: string;
  linkHref?: string;
  linkLabel?: string;
};

/** Tarjeta de nota con acento rojo de marca. Si se pasa linkHref, muestra un enlace que aparece al pasar el cursor. */
export default function InfoGlowCard({ title, text, linkHref, linkLabel = "Ver más" }: Props) {
  return (
    <div className="igc-card">
      <p className="igc-title">{title}</p>
      <p className="igc-text">{text}</p>
      {linkHref && (
        <a href={linkHref} target="_blank" rel="noopener noreferrer" className="igc-link">
          <span>{linkLabel}</span>
          <ChevronRight className="igc-arrow" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
