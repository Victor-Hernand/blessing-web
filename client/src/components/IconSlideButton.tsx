import type { ReactNode } from "react";
import "./IconSlideButton.css";

type Props = {
  href: string;
  label: string;
  icon: ReactNode;
  onClick?: () => void;
};

/** Botón rojo: al pasar el cursor el texto sale hacia arriba y aparece el icono. */
export default function IconSlideButton({ href, label, icon, onClick }: Props) {
  return (
    <a href={href} onClick={onClick} className="isb">
      <span className="isb__wrapper">
        <span className="isb__text">{label}</span>
        <span className="isb__icon" aria-hidden="true">
          {icon}
        </span>
      </span>
    </a>
  );
}
